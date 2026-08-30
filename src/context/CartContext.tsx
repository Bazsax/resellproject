"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductAddon } from "@/data/products";

export interface CartItem {
  id: string; // unique item instance id
  product: Product;
  selectedSize?: string | number;
  quantity: number;
  addons: ProductAddon[];
  totalPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: Product, size?: string | number, quantity?: number, selectedAddons?: ProductAddon[]) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  isOrderModalOpen: boolean;
  openOrderModal: () => void;
  closeOrderModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("resell_cart_v1");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to read cart from local storage", e);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("resell_cart_v1", JSON.stringify(cart));
      } catch (e) {
        console.error("Failed to save cart to local storage", e);
      }
    }
  }, [cart, mounted]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  const calculateItemTotal = (product: Product, quantity: number, addons: ProductAddon[] = []) => {
    const addonsTotal = addons.reduce((sum, item) => sum + item.price, 0);
    return (product.price + addonsTotal) * quantity;
  };

  const addToCart = (
    product: Product,
    size?: string | number,
    quantity: number = 1,
    selectedAddons: ProductAddon[] = []
  ) => {
    const chosenSize = size || product.defaultSize || (product.sizes ? product.sizes[0] : undefined);
    const addonsKey = selectedAddons.map((a) => a.id).sort().join(",");
    const instanceId = `${product.id}-${chosenSize || "nosize"}-${addonsKey}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === instanceId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: calculateItemTotal(product, newQty, selectedAddons)
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: instanceId,
          product,
          selectedSize: chosenSize,
          quantity,
          addons: selectedAddons,
          totalPrice: calculateItemTotal(product, quantity, selectedAddons)
        };
        return [...prevCart, newItem];
      }
    });

    setIsOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: calculateItemTotal(item.product, newQty, item.addons)
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        isOrderModalOpen,
        openOrderModal,
        closeOrderModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
