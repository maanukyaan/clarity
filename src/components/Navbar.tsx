import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Clarity logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <span className="font-title text-[26px] font-extrabold max-sm:hidden">
          Clarity
        </span>
      </Link>

      <div className="flex-between gap-5">
        {/* User management (by Clerk) */}
        <MobileNav />
      </div>
    </nav>
  );
}
