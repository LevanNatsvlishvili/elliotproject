import React from "react";
import styled from 'styled-components'

const NavMenu = styled.div`
  margin-left:auto;
  display:flex;
`

const StyledLink = styled.a`
  margin: 0 25px ;
  color:#1B2F9A;
  font-size:18px;
  line-height:22px;
  text-decoration:none;
  height:fit-content;
`

const Img = styled.img`
  width:24px;
  height:24px;
  margin: 0 25px ;

`

function HeaderNavMenu() {
  return (
    <NavMenu>
      {Links.map((link, i) => (
        <Link text={link} key={i} />

      ))}

      <Img src="/icons/world.svg" alt="world" />
    </NavMenu>
  );
}

function Link(props) {
  const { text } = props;
  return (
    <StyledLink href='#'>
      {text}
    </StyledLink>
  );
}

const Links = [
  'About Us',
  'Program',
  'Team',
  'Gallery',
]

export default HeaderNavMenu;
