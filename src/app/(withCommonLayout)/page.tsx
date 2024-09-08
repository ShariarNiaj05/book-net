import Banner from "@/components/banner/Banner";
import { getAllPosts } from "@/services/postServices";

const HomePage = async () => {
  const posts = await getAllPosts();
  return (
    <>
      <Banner />
    </>
  );
};

export default HomePage;
