import React from "react";
import styled from 'styled-components'
import HeaderNavMenu from './HeaderNavMenu'

const StyledHeader = styled.header`
  position:fixed;
  width:100%;
  z-index:1111;
`
const StyledNav = styled.nav`
  padding:0 122px;
  padding-top:50px;
  display:flex;
`

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <img src="/images/logo.svg" alt="logo" />

        <HeaderNavMenu />
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
