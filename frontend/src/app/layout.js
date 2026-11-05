import "./globals.css";

export const metadata = {
  title: "HomeTuition.lk | Transparent Online Tuition",
  description: "Pay only if satisfied. Track everything. Hide nothing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans">
        {children}
      </body>
    </html>
  );
}