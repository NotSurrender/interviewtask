import { FC } from 'react';
import { ReplyCard } from '../ReplyCard';
import { ReplyListProps } from './interfaces';
import './replyList.css';

export const ReplyList: FC<ReplyListProps> = ({ replies = [] }) => {
  return (
    <ul className="replyList">
      {replies.map((reply) => (
        <li key={reply.title}>
          <ReplyCard {...reply} />
        </li>
      ))}
    </ul>
  );
};
