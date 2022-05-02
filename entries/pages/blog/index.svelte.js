import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "../../../chunks/index-fa0ff56f.js";
const load = async ({ fetch }) => {
  const posts = await fetch("/api/posts.json");
  const allPosts = await posts.json();
  return { props: { posts: allPosts } };
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<h1>Blog</h1>

<p>My dev blog posts will appear here eventually\u2026</p>


<ul>${each(posts, (post) => {
    return `<li><h2><a${add_attribute("href", post.path, 0)}>${escape(post.meta.title)}
          </a></h2>
        Published ${escape(post.meta.date)}
      </li>`;
  })}</ul>`;
});
export { Blog as default, load };
