"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { classNames } from "@/utils/classNames";
const NavLink = ({ children, exact, href, activeClassName, ...props }) => {
  const path = usePathname();
  const active = exact ? path === href : path.startsWith(href);
  const classes = classNames(props.className, active && activeClassName);
  if (classes) {
    props.className = classes;
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
