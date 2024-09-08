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
    <div className="p-5">
      <PostDetails post={post} />
    </div>
  );
};

export default PostDetailsPage;
