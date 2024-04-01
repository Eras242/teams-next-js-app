import React from "react";
import main from "../styles/main.module.css";
import { Button } from "./Button";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";

export default function NavBar() {
  return (
    <div className={main.navbar}>
      <NavLinks />
    </div>
  );
}
