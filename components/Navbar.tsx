import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-slate-300 py-10">
      <nav className="flex justify-around items-center font-semibold text-2xl">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Navbar;
