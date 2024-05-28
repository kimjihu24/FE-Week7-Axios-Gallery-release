import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 box-shadow: 0px 0px 10px #ccc;
  border-radius: 10px;
  background-color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px 10px 0px 0px;
`;

const Title = styled.h3`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  white-space: nowrap;
`;

const Text = styled.p`
  color: #666;
  width: 100%;
  text-align: left;
  padding-left: 20px;
`;

const Card = ({ id, img, name, text }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      // alert(`/card/${id}`)
      // alert('안녕하세요');
      navigate(`/card/${id}`);
    };
  
    return (
      <CardContainer onClick={handleClick}>
        <Image src={img} alt={name} />
        <Title>{name}</Title>
        <Text>{text}</Text>
      </CardContainer>
    );
  };
  
  export default Card;