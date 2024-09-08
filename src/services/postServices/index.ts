export const getAllPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }

  return res.json();
};
