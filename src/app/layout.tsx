import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Booking - Multipurpose Online Booking Theme",
  description: "Booking - Multipurpose Online Booking Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        {/* <!-- Favicon --> */}
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* <!-- Google Font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="data-bs-theme">{children}</ThemeProvider>
          <Script
            strategy="beforeInteractive"
            src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
          ></Script>
          <Script
            strategy="beforeInteractive"
            src="assets/vendor/tiny-slider/tiny-slider.js"
          ></Script>
          <Script
            strategy="beforeInteractive"
            src="assets/vendor/glightbox/js/glightbox.js"
          ></Script>
          <Script
            strategy="beforeInteractive"
            src="assets/vendor/flatpickr/js/flatpickr.min.js"
          ></Script>
          <Script
            strategy="beforeInteractive"
            src="assets/vendor/choices/js/choices.min.js"
          ></Script>
          <Script
            strategy="beforeInteractive"
            src="assets/js/functions.js"
          ></Script>
          {/* <Script strategy="beforeInteractive" src="assets/js/theme.js"></Script> */}
        </body>
      </html>
    </>
  );
}
