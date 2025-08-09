import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";

export const metadata = {
  title: "Blog's Sai",
  description: "This is a modern blog website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
