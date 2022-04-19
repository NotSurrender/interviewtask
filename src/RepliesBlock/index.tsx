import { FC } from 'react';
import { ReplyList } from '../ReplyList';
import { RepliesBlockProps } from './interfaces';
import './repliesBlock.css';

export const RepliesBlock: FC<RepliesBlockProps> = ({ replies }) => {
  return (
    <section className="repliesBlock">
      <h2 className="repliesBlock__header">Replies: {replies?.length}</h2>
      <ReplyList replies={replies} />
    </section>
  );
};
