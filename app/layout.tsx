import "./globals.css";
import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "@/components/nexttoast";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/redux/Providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title:
    "Explore Design Challenges | Find Creative Challenges to Enhance Your Skills",
  description:
    "Discover a wide range of design challenges to fuel your creativity. Join our community and take part in exciting projects that sharpen your design skills. Get inspired and showcase your talent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Navbar />
          {children}
          <ToastContainer />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
