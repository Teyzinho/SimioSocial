"use client"

import React from 'react'
import { Nav } from './NavBar.Styles'
import Image from 'next/image'

const NavBar = () => {
  return (
      <Nav>
        <Image
          src="/images/logo-white.png"
          alt='logo'
          width={40}
          height={40}
        />
          <h1>SimioSocial</h1>
      </Nav>
  )
}

export default NavBar