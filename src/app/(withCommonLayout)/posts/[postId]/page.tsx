import { getPost } from "@/services/postServices";

type TProps = {
  params: {
    postId: string;
  };
};

const PostDetailsPage = async ({ params }: { params: TProps }) => {
  const postId = params.params.postId;
  const post = await getPost(postId, true);
  return <div>PostDetailsPage:{postId}</div>;
};

export default PostDetailsPage;
