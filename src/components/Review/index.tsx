import { formatDistance } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating';

type ReviewProps = {
  score: number;
  img: string;
  title: string;
  comment: string;
  date: Date;
};

const ReviewContainer = styled.div`
  background-color: var(--lightgrey);
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  position: relative;
  outline: 0.4rem solid white;
  img {
    width: 3rem;
    height: 3rem;
    margin: 0;
    border-radius: 100%;
    margin-right: 1rem;
  }
  p {
    margin: 0.2rem 0;
  }
  h5 {
    margin: 0.2rem 0;
  }
  small {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`;

export default function Review({
  score,
  img,
  title,
  comment,
  date
}: ReviewProps) {
  return (
    <ReviewContainer>
      <small>{formatDistance(date, new Date())}</small>
      <img src={img} />
      <div>
        <h5>{title}</h5>
        <p>{comment}</p>
        <Rating score={score} small={true} />
      </div>
    </ReviewContainer>
  );
}
