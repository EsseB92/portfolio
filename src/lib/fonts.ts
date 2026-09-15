import { Geist, Geist_Mono } from "next/font/google";

// Polices partagées par les deux root layouts (FR et EN).
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
