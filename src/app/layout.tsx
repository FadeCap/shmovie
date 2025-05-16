import "./index.css";

export const metadata = {
  title: "Shmovie",
  description: "Find trending movies with TMDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins bg-black">{children}</body>
    </html>
  );
}
