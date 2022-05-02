import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-fa0ff56f.js";
import { P as Post } from "../../../chunks/_post-ba3939f2.js";
const metadata = {
  "title": "Post Two",
  "date": "2022-05-01"
};
const _2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Hello, I am <em>Post Two.</em></p>
<p>Hey go check out: http://localhost:3000/api/posts.json</p>
<p><strong>Nice to meet you!</strong></p>`;
    }
  })}`;
});
export { _2 as default, metadata };
