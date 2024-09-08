export const getAllPosts = async (type: string) => {
  let fetchOptions = {
    cache: type,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }

  return res.json();
};
