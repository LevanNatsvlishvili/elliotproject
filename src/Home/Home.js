import React from "react";
import styled from 'styled-components'
import HomeApply from './HomeApply'

const BackgroundImg = styled.img`
  width:100%;
  height:100vh;
`
const BoatImg = styled.img`
  position: absolute;
  top: 50%;
  right: 25%;
  transform:translate(50%, -50%);
  width:300px;
  height:400px;
`


function Home() {
  return (
    <section>
      <BackgroundImg src="/images/backgroundGroup.png" alt="background" />

      <BoatImg src="/images/boat.svg" alt="boat" />

      <HomeApply />
    </section>
  );
}

export default Home;
