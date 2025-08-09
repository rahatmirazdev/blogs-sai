import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: "Blog's Sai",
  description: "This is a modern blog website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
