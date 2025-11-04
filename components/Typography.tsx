"use client";

import { JSX, ReactNode } from "react";
import clsx from "clsx";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";

interface Props {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  h1: "text-4xl md:text-5xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg",
  h6: "text-base",
  body: "text-base",
};

const elementMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
};

export default function Typography({
  variant = "body",
  children,
  className,
}: Props) {
  const Component = elementMap[variant];

  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
}
