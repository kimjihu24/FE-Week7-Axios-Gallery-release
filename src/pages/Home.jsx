
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { styled } from 'styled-components';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

const Grid = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 100px;
`;

const Home = () => {
  
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('http://3.36.127.43:8080/imageAll')
      .then(res => {
        setImages(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);  
  
  return (
      <>
        <Header />
        <Grid>
        {images.map((image) => (
        <Card 
          key={image.id}
          id={image.id}
          img={image.imageURL}
          name={image.imageName}
          text={image.imageText}
        />
      ))}
        </Grid>
      </>
    );
  };

  export default Home;