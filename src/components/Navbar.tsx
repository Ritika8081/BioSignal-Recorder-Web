"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "./Theming/mode-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Contributors from "./Contributors";
import { Badge } from "./ui/badge";

const Navbar = () => {
  return (
    <div>
      <div className="top-0 md:left-0 md:right-0 flex backdrop-blur-sm justify-center py-[10px] border-b items-center font-bold z-50">
        <div className="flex w-full max-w-screen mx-4 md:mx-16 justify-between items-center">
          <Link href="/">
            <div className="flex flex-row gap-2 group">
              <div className="text-primary font-medium text-xl hover:cursor-pointer font-lobster tracking-wide hover:tracking-widest transition-all duration-300 hover:text-plot">
                plot it
              </div>
              <Badge
                variant={"outline"}
                className="mt-1 font-poppins tracking-wider font-thin rounded group-hover:bg-secondary"
              >
                Alpha
              </Badge>
            </div>
          </Link>
          <div className="flex gap-0 md:gap-2 items-center">
            <ModeToggle />
            <Link href="https://github.com/upsidedownlabs" target="__blank">
              <Button variant={"ghost"} size={"sm"}>
                <GitHubLogoIcon width={24} height={24} />
              </Button>
            </Link>
            <Contributors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
