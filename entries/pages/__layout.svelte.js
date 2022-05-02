import { c as create_ssr_component, v as validate_component } from "../../chunks/index-fa0ff56f.js";
var header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1ppo7s5{padding:1rem;background:lightskyblue;display:flex;flex-wrap:wrap;justify-content:space-between}ul.svelte-1ppo7s5{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-1ppo7s5{text-decoration:none;color:inherit}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1ppo7s5"}"><a href="${"/"}" class="${"svelte-1ppo7s5"}">Home</a>
  
    <nav><ul class="${"svelte-1ppo7s5"}"><li><a href="${"/blog"}" class="${"svelte-1ppo7s5"}">Blog</a></li>
        <li><a href="${"/about"}" class="${"svelte-1ppo7s5"}">About</a></li>
        <li><a href="${"/contact"}" class="${"svelte-1ppo7s5"}">Contact</a></li></ul></nav>
  </header>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "SM").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

<footer>Footer.</footer>`;
});
export { _layout as default };
