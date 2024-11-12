import { BlogPost } from "apps/blog/types.ts";
import ResourceIsland from "site/islands/resource-islands.tsx";

export interface Props {
  title?: string;
  description: string;
  type: string[];
  topic: string[];
  year: string[];
  cards?: BlogPost[] | null;
}

const Resource = ({ title, cards, description, type, topic, year }: Props) => {
  return (
    <ResourceIsland
      title={title}
      cards={cards}
      description={description}
      type={type}
      topic={topic}
      year={year}
    />
  );
};

export default Resource;
