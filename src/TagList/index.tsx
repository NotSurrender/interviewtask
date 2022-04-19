import { FC } from 'react';
import { Tag } from '../Tag';
import { TagListProps } from './interfaces';
import './tagList.css';

export const TagList: FC<TagListProps> = ({ tags, className }) => {
  return (
    <ul className={`tagList ${className || ''}`}>
      {tags.map((tagName) => (
        <li key={tagName}>
          <Tag>{tagName}</Tag>
        </li>
      ))}
    </ul>
  );
};
