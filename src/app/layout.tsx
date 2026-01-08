import "./globals.css";

export const metadata = {
  title: "Finech – Financial APIs",
  description: "Empowering the next generation of financial infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
