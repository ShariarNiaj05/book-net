import { getPost } from "@/services/postServices";

type TProps = {
  params: {
    postId: string;
  };
};

const PostDetailsPage = async ({ params }: TProps) => {
  const postId = params.postId;
  const post = await getPost(postId, true);
  return <div>PostDetailsPage:{postId}</div>;
};

export default PostDetailsPage;
