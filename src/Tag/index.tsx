import { FC } from 'react';
import { TagProps } from './interfaces';
import './tag.css';

export const Tag: FC<TagProps> = ({ children }) => {
  return <span className="tag">{children}</span>;
};
