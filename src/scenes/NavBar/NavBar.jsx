"use client";
import { Nav, SearchContainer, GlassLabel } from "./NavBar.Styles";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/src/components/inputs/input";
import { Button } from "@/src/components/buttons/button";
import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const showGlassLabel = inputValue.length === 0;

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Nav>
      <Link href="/">
        <Image src="/images/logo-white.png" alt="logo" width={40} height={40} />
        <h1>SimioSocial</h1>
      </Link>

      <SearchContainer>
        <Input
          id="search"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
        />

        <GlassLabel htmlFor="search" show={showGlassLabel ? "true" : undefined}>
          <RxMagnifyingGlass />
        </GlassLabel>
      </SearchContainer>
      <Link
        href="#"
      >
        <Button>Criar Post</Button>
      </Link>
    </Nav>
  );
};

export default NavBar;
