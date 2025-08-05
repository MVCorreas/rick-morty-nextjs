import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <h1>RICK AND MORTY</h1>
      <Link href="/characters">
        <Button text="View Characters" variant="primary" size="small" />
      </Link>
    </div>
  );
}