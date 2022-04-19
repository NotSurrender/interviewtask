export interface Reply {
  title: string;
  tags: string[];
  text: string;
  author: string;
  replies?: Reply[];
}
