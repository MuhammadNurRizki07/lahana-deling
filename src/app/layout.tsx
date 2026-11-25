import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lahana Deling — Nutrition Student Portfolio",
  description:
    "Personal portfolio of Lahana Deling, a 6th-semester Nutrition Science student (S1 Gizi) at Universitas Muhammadiyah Cirebon with GPA 3.86. Passionate about food quality, nutrition, and healthy living.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#080908] text-white antialiased selection:bg-[#8CF12E] selection:text-black">
        {children}
      </body>
    </html>
  );
}
