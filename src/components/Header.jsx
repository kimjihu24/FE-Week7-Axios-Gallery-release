import React from 'react';
import styled from 'styled-components';
import { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";

const HaedContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color:#ffffff;
`;

const Image = styled.div`
   img {
    width: 130px;
    height: 130px;
    object-fit: cover; // 이미지 비율 유지하며 크기 조절
    border-radius: 50%;
    padding-top: 25px;
  }
`;

const TextBox = styled.div`
  width: 35%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  padding-top: 40px;
`;


const Header = () => {
    const [CardNum, setCardNum] = useState('');

    useEffect(() => {
    axios
    .get(`http://3.36.127.43:8080/imageSize`)
    .then(res => {
        console.log(res.data)
        setCardNum(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <HaedContainer>
    <Image>
    <img src='lion.jpg' alt='아이콘'></img>
    </Image>
    <TextBox>
    <h2>likelion_12th_frontend </h2>
    <a/>멋쟁이사자처럼 12기 여러분 화이팅!! 어른 사자로 폭풍성장중...🦁
    <a/>게시물: {CardNum} 개
    </TextBox>
    </HaedContainer>
    );
  };
  
  export default Header;