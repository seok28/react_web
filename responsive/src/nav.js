import React from 'react';
import SEOK from './seok.jpg'
import styled from 'styled-components'

function Nav() {
  return (
    <Common>
      <Home href='/'> Portfolio </Home>
      <LogoImg src={SEOK}/>

      <ContlorBox >
        <Contlor href='/connect'>미구현 </Contlor>
        <Contlor href='/login'>로그인</Contlor>
        <Contlor href='/signup'>회원가입</Contlor>
      </ContlorBox>
    </Common>
  );
}

const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`

const Home = styled.a`
    display: flex;
    align-items:center;
    font-size: 30px;
    margin 10px;
    text-decoration: none;
    color: black;
    font-weight: bold;
`
const LogoImg = styled.img`
    width:100px;
`


const ContlorBox = styled.div`
    display: flex;
    align-items:center;
`

const Contlor = styled.a`
    margin: 10px;
    text-decoration: none;
    color: black;
`
export default Nav;