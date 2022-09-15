import React from "react";
import { Email } from "styled-icons/evaicons-solid";
import { Twitter } from "styled-icons/remix-fill";

function Navbar() {
  return (
    <nav className="mx-auto p-3 fixed right-0 left-0 bg-[#292522] z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex">
          <div className="flex space-x-1 my-auto">
            <a href="https://twitter.com">
              <Twitter className="w-6" />
            </a>
            <a href="https://youtube.com/">
              <Email className="w-5" />
            </a>
          </div>
          <div className="mx-auto">
            <h1 className="text-2xl font-bold tracking-[7px]">WEB3SG</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
