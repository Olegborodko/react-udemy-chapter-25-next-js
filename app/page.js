import Link from "next/link";

//@ это путь к root folder
import Header from "@/components/header";

export default function Home() {
  console.log('here'); // this message will be shown on the server
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href='/about'>About Us</Link>
    </main>
  );
}
