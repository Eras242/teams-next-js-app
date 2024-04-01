"use client";

import Link from "next/link";
import { Button } from "./Button";
import main from "../styles/main.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Login", href: "/login" },
];

export default function NavLinks() {
  const path = usePathname();
  return links.map((link) => {
    return (
      <Link key={link.name} href={link.href}>
        <Button
          className={
            path === link.href ? `${main.btn} ${main.active}` : main.btn
          }
        >
          {link.name}
        </Button>
      </Link>
    );
  });
}
