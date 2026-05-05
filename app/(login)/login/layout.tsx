import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const user = cookieStore.get("user")?.value;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}