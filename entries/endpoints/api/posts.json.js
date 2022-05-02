const get = async () => {
  const allPostFiles = { "../blog/1.md": () => import("../../pages/blog/1.md.js"), "../blog/2.md": () => import("../../pages/blog/2.md.js") };
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(iterablePostFiles.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const postPath = path.slice(2, -3);
    return {
      meta: metadata,
      path: postPath
    };
  }));
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return {
    body: sortedPosts
  };
};
export { get };
