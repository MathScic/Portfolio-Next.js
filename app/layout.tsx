import Footer from "@/components/Footer";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <title>Portfolio Mathieu Scicluna </title>
      </head>
      <body className="bg-gradient-to-b from-[#ff9a3d] to-[#f5f5f5]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
