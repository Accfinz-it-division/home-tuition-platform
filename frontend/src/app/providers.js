"use client";

import { ThemeProvider } from "@wrksz/themes/next/client";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}