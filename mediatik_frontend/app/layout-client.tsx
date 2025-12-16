"use client";

import { Aside } from "@/components/layout/Aside";
import Header from "@/components/layout/Header";
import { useSidebar } from "@/hooks/useAsidebar";


export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { esOuvert, fermerMenu, toggle } = useSidebar();

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">
      {/* SIDEBAR */}
      <Aside esOuvert={esOuvert} fermerMenu={fermerMenu} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <Header menuCliquer={toggle} />

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}