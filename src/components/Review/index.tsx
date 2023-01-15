import { formatDistance } from 'date-fns';
import React from 'react';
import Rating from '../Rating';

import './style.css';

type ReviewProps = {
  score: number;
  img: string;
  title: string;
  comment: string;
  date: Date;
};

export default function Review({
  score,
  img,
  title,
  comment,
  date
}: ReviewProps) {
  return (
    <div className="review_container">
      <small>{formatDistance(date, new Date())}</small>
      <img src={img} />
      <div>
        <h5>{title}</h5>
        <p>{comment}</p>
        <Rating score={score} small={true} />
      </div>
    </div>
  );
}
