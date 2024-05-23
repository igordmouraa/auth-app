import React from "react";
import { socialMedia } from "@/lib/data";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between space-y-4 py-10 md:flex-row md:space-y-0">
        <div className="flex justify-center space-x-6">
          {socialMedia.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {React.createElement(item.icon, { className: "h-6 w-6" })}
            </Link>
          ))}
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Feito com ❤️ por{" "}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {siteConfig.name}
          </Link>
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
