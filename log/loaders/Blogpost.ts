import { BlogPost } from "apps/blog/types.ts";


const loader = ({ post }: { post: BlogPost }): BlogPost => post;

export default loader;
