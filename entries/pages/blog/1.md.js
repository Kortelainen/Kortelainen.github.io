import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-fa0ff56f.js";
import { P as Post } from "../../../chunks/_post-ba3939f2.js";
const metadata = {
  "title": "Post One",
  "date": "2022-05-01"
};
const _1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Hello, I am <em>Post One.</em></p>
<p><strong>Nice to meet you!</strong></p>`;
    }
  })}`;
});
export { _1 as default, metadata };
