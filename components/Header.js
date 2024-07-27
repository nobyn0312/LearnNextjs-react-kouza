import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <>
    <header>
      <p>ヘッダーコンポーネント</p>
    </header>
    </>
  );
}
