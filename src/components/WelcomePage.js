import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #black;
    font-size: 3rem;
   
  }
`;


const Button = styled.button`
  border: 2px solid #8ED043;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
  background: #1C1C36;
  color: #8ED043;
  font-size: 1.2rem;
  margin-top: 10%;
  &:hover {
    cursor: pointer;
    background: white;
    border: 2px solid #8ED043;
    color: #1C1C36;
  }
`;

const ImgDiv = styled.div`
  text-align: center;
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function WelcomePage() {
  return (
    <WelcomeSection>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImgDiv>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </ImgDiv>
      </header>
      <BtnDiv>
        <Link to='/characters/'>
          <Button>See Characters</Button>
        </Link>
      </BtnDiv>
    </WelcomeSection>
  );
}