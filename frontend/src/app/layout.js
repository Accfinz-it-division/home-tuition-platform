import "./globals.css";
import { ThemeProvider } from "@wrksz/themes/next";

export const metadata = {
  title: "HomeTuition.lk | Transparent Online Tuition",
  description: "Pay only if satisfied. Track everything. Hide nothing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}