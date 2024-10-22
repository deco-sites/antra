import { BlogPost } from "apps/blog/types.ts";

interface PaginationParams {
  page?: number;
  pageSize?: number;
}

interface PaginatedResponse {
  posts: BlogPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
}

const loader = async ({ 
  page = 1, 
  pageSize = 10 
}: PaginationParams): Promise<PaginatedResponse> => {
  // This is a mock implementation. Replace with actual data fetching logic.
  const allPosts: BlogPost[] = [
    // Populate this array with actual blog posts from your data source
  ];

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalPosts,
    totalPages,
    currentPage: page
  };
};

export default loader;