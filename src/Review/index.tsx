import { FC } from 'react';
import { ReviewCard } from '../ReviewCard';
import { RepliesBlock } from '../RepliesBlock';
import { ReviewProps } from './interfaces';
import './review.css';

export const Review: FC<ReviewProps> = (props) => {
  const { title, text, author, tags, replies = [] } = props;

  return (
    <div className="review">
      <ReviewCard title={title} text={text} author={author} tags={tags} />
      <RepliesBlock replies={replies} />
    </div>
  );
};
