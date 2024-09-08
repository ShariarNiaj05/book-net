type TProps = {
  params: {
    postId: string;
  };
};

const PostDetailsPage = ({ params }: { params: TProps }) => {
  const postId = params.params.postId;
  return <div>PostDetailsPage:{postId}</div>;
};

export default PostDetailsPage;
