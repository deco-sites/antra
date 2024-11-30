import { BlogPost } from "apps/blog/types.ts";
import ResourceIsland from "site/islands/resource-islands.tsx";

export interface Props {
  title?: string;
  description: string;
  type: {
    key: string;
    value: string;
  }[];
  topic: {
    key: string;
    value: string;
  }[];
  year: string[];
  cards?: BlogPost[] | null;
  typeTitle: string;
  topicTitle: string;
  yearTitle: string;
}

const Resource = (
  {
    title,
    cards,
    description,
    type,
    topic,
    year,
    typeTitle,
    topicTitle,
    yearTitle,
  }: Props,
) => {
  return (
    <ResourceIsland
      title={title}
      cards={cards}
      description={description}
      type={type}
      topic={topic}
      year={year}
      typeTitle={typeTitle}
      topicTitle={topicTitle}
      yearTitle={yearTitle}
    />
  );
};

export default Resource;
