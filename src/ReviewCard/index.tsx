import { FC } from 'react';
import { TagList } from '../TagList';
import { ReviewCardProps } from './interfaces';
import './reviewCard.css';

export const ReviewCard: FC<ReviewCardProps> = (props) => {
  const { title, tags, text, author } = props;

  return (
    <section className="reviewCard">
      <h2 className="reviewCard__title">{title}</h2>
      <p className="reviewCard__text">{text}</p>
      <div className="reviewCard__bottomSection">
        <span className="reviewCard__author">{author}</span>
        <TagList tags={tags} />
      </div>
    </section>
  );
};
