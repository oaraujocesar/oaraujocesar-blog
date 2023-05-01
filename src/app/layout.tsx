import { Footer } from "@components/Footer/Footer.component";
import "./globals.css";
import { Overpass } from "next/font/google";
import { Header } from "@components/Header/Header.component";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "César O. Araújo's personal blog.",
  description: "César O. Araújo's personal blog to post some stuff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={overpass.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
