import PostDetails from "@/components/ui/PostDetails";
import { getPost } from "@/services/postServices";

type TProps = {
  params: {
    postId: string;
  };
};

const PostDetailsPage = async ({ params }: TProps) => {
  const postId = params.postId;
  const post = await getPost(postId, true);
  return (
    <>
      <PostDetails post={post} />
    </>
  );
};

export default PostDetailsPage;
