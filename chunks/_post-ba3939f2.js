import { c as create_ssr_component, e as escape } from "./index-fa0ff56f.js";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  return `<h1>${escape(title)}</h1>
  
  <p>Published: ${escape(date)}</p>
  
  ${slots.default ? slots.default({}) : ``}`;
});
export { Post as P };
