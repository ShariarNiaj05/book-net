import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPost";
import { getAllPosts } from "@/services/postServices";

const HomePage = async () => {
  const posts = await getAllPosts("isr");
  return (
    <>
      <Banner />
      <LatestPosts posts={posts} />
    </>
  );
};

export default HomePage;
