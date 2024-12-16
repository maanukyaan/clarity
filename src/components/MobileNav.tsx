"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarItems } from "@/config/sidebarItems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[320px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={24}
            height={24}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <SheetTitle>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Clarity logo"
                width={32}
                height={32}
                className="max-sm:size-10"
              />
              <span className="font-title text-[26px] font-extrabold text-white max-sm:hidden">
                Clarity
              </span>
            </Link>
          </SheetTitle>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarItems.map((link) => {
                  const isActive =
                    link.route === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.route);

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex w-full max-w-72 items-center gap-4 rounded-lg p-4",
                          {
                            "bg-blue-1": isActive,
                          },
                        )}
                      >
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="text-sm font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
