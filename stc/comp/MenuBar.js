import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="fixed flex bottom-0 left-0 right-0 bg-white p-[16px] px-[100px] pb[24px] justify-between shadowlg [&>a]:hover:opacity-50">
      <Link href="/">Home</Link>
      <Link href="About">About</Link>
      <Link href="Contact">Contact</Link>
    </nav>
  )
}