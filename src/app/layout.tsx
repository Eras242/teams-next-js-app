import "./styles/global.css";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const supplyMono = localFont({
  src: "./fonts/Supply-Light.otf",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        <Container>
          <div className={"header"}>
            <NavBar />
          </div>
          <div className="content">{children}</div>
        </Container>
      </body>
    </html>
  );
}
