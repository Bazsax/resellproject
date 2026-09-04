import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piac radar | Direct Supply",
  description:
    "Magyar piacra rangsorolt viszonteladási lehetőségek: momentum, eladási példák, piactéri comps és beszállítói listák egy helyen.",
};

export default function PiacRadarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
