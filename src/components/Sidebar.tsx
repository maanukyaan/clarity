"use client";

import { sidebarItems } from "@/config/sidebarItems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[320px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarItems.map((link) => {
          const isActive =
            link.route === "/"
              ? pathname === "/"
              : pathname.startsWith(link.route);

          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn(
                "flex items-center justify-start gap-4 rounded-lg p-4",
                {
                  "bg-blue-1": isActive,
                },
              )}
            >
              <Image src={link.icon} alt={link.label} width={24} height={24} />
              <p className="font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
