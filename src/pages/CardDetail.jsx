import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;


const Title = styled.h2`
  display: flex;
  width: 60%;
  margin-top: 20px;
  text-align: left;
`;

const Text = styled.p`
  display: flex;
  width: 60%;
  color: #666;
  margin-top: 10px;
  text-align: left;
`;

const Image = styled.img`
  width: 60%;
  height:auto;
  object-fit: cover;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  text-align: left;
  gap:20px;
`;

const Bold = styled.div`
  font-weight: bold;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin-top: 20px;
`;

const PostComment = styled.input`
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
`;

const PostButton = styled.button`
  display:flex;
  text-align:right;
  width: 60px;
  color:#005eff;
  background-color: #ffffff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  display:flex;
  text-align:right;
  width: 60px;
  background-color: white;
  border: none;
  color: grey;
  padding:10px;
  cursor: pointer;
  margin-left: auto;
`;

const CommentCount = styled.div`
  display: flex;
  width: 60%;
  margin-top: 10px;
  text-align: left;
  font-weight: bold;
`;

const CardDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [comment,setComment] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://3.36.127.43:8080/imageAll`)
    .then((res) => {
      const imageDetail = res.data.find(detailimage => detailimage.id === id);
      setCard(imageDetail);
    })
    .catch(error => {
      console.log(error);
    });
}, [id]);

useEffect(() => {
  if (id) {
    axios.get(`http://3.36.127.43:8080/${id}/comments`)
      .then((res) => {
        setComment(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}, [id]);

const handleCommentChange = (e) => {
  setNewComment(e.target.value);
};

const handleCommentSubmit = (e) => {
  e.preventDefault();
  axios.post(`http://3.36.127.43:8080/${id}/comments`, { commentBody: newComment })
    .then((res) => {
      setComment([...comment, res.data]);
      setNewComment("");
    })
    .catch(error => {
      console.log(error);
    });
};

const handleDeleteComment = (commentId) => {
  axios.delete(`http://3.36.127.43:8080/${id}/comments/${commentId}`)
    .then(() => {
      setComment(comment.filter(comment => comment.id !== commentId));
    })
    .catch(error => {
      console.log(error);
    });
};

  return (
    <DetailContainer>
      <Title>{card.imageName}</Title>
      <Text>{card.imageText}</Text>
      <Image src={card.imageURL} alt={card.imageName} />
      <CommentCount>댓글 수: {comment.length}</CommentCount>
    <CommentForm onSubmit={handleCommentSubmit}>
        <PostComment 
          type="text" 
          placeholder="댓글 작성..." 
          value={newComment} 
          onChange={handleCommentChange}
        />
        <PostButton type="submit">게시</PostButton>
    </CommentForm>
    <>
    {comment.length > 0 ? comment.map(comment => (
          <CommentContainer key={comment.id}>
            <Bold><p>익명</p></Bold>
            <p>{comment.commentBody}</p>
            <DeleteButton onClick={() => handleDeleteComment(comment.id)}>삭제</DeleteButton>
          </CommentContainer>
        )) 
        : <p>No Comment</p>}   
    </>
   </DetailContainer>
  );
};

export default CardDetail;