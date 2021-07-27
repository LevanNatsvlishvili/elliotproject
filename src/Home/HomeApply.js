import React from "react";
import styled from 'styled-components';

const Apply = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(20%,-20%);
  width:40%;
`
const ApplyText = styled.p`
  font-size:28px;
  line-height:37px;
  color:#EFEFEF;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  & span{
    color:#F25178;
  }
`
const Button = styled.button`
  background:#EFEFEF;
  box-shadow: -9px 9px 13px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height:60px;
  width:176px;
  color:#1B2F9A;
  border:none;
  font-size:22px;
  line-height:33px;
`


function Home() {
  return (
    <Apply>
      <ApplyText>
        Our unique system and community of experienced teachers lead to a child’s
        advanced intellectual <span>development</span> proccess.
      </ApplyText>
      <Button>
        Apply
      </Button>
    </Apply>
  );
}

export default Home;
