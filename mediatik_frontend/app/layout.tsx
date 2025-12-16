import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/lib/context/NavigationContext";
import { Aside } from "@/components/layout/Aside";
import { useSidebar } from "@/hooks/useAsidebar";
import Header from "@/components/layout/Header";
import LayoutClient from "./layout-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mediatik - Votre plateforme musicale",
  description: "Découvrez, écoutez et partagez votre musique préférée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavigationProvider>
          <LayoutClient>
            {children}
          </LayoutClient>
        </NavigationProvider>
      </body>
    </html>
  );
}