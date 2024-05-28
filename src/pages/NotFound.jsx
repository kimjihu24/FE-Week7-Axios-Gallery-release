import React from "react";
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 20px;
  height: 100%;
`;

// const ImgContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 200px;
//   height: 200px;
//   align-items: center;
//   margin-top: 20px;
// `;

// const TextContainer = styled.div`
//    display: flex;
//    text-align :center ;
//    margin-top: 20px;
// `;


const Button = styled.button`
  background-color:blue;
    color: white;
    width: 150px;
    height: 40px;
    border:none;
    border-radius: 10px;
    font-size: 15px;
    
`;
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <> 
            <Wrapper>
                <h2>멋쟁이 사자가 당신을 기다리고 있습니다</h2>
                {/* <ImgContainer> */}
                <img src='/error.jpg' alt='어흥'></img>
                {/* </ImgContainer> */}
                {/* <TextContainer> */}
                 <a>어흥..</a>   
                {/* </TextContainer> */}
                <Button onClick={() => navigate(-1)}>뒤돌아서 도망가기!</Button> 
             </Wrapper>   
             
        </>
    );
};

export default NotFound;