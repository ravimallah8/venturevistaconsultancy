import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Venture Vista Consultancy",
  description: "Get loan and commision together",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
