import { Providers } from "@app/providers";
import "./globals.css";

export const metadata = {
  title: "Mobile Menu",
  description: "Test Task by Igor Stepanov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
