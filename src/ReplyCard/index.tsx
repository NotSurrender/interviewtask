import { FC } from 'react';
import { TagList } from '../TagList';
import { ReplyCardProps } from './interfaces';
import './replyCard.css';

export const ReplyCard: FC<ReplyCardProps> = (props) => {
  const { title, text, author, tags, replies } = props;

  return (
    <div className="replyCard">
      <TagList className="replyCard__tagList" tags={tags} />
      <h3 className="replyCard__author">{author}</h3>
      <span className="replyCard__title">{title}</span>
      <p className="replyCard__text">{text}</p>
      {replies?.length
        ? replies.map((reply) => <ReplyCard {...reply} />)
        : null}
    </div>
  );
};
