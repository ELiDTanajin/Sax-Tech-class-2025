import Link from "next/link";

export default function MenuBar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="About">About</Link>
      <Link href="Contact">Contact</Link>
    </div>
  )
}