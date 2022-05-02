import { c as create_ssr_component } from "../../chunks/index-fa0ff56f.js";
const Uses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Uses</h1>
<p><strong>Here\u2019s some stuff I use</strong></p>
<ul><li>SvelteKit</li>
<li>VS Code</li>
<li>mdsvex</li>
<li>SASS
sveltejs/adapter-static</li>
<li>Emojis \u{1F60E}</li></ul>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// JavaScript goes here,</span>
<span class="token comment">// And will be syntax-highlighted! COOL FOR CODE EXAMPLES</span>


<span class="token operator">--</span><span class="token operator">-</span>
# frontmatter goes here
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">import</span> SomeComponent <span class="token keyword">from</span> <span class="token string">'$lib/components/SomeComponent.svelte'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

# Markdown content here

<span class="token operator">&lt;</span>SomeComponent <span class="token operator">/</span><span class="token operator">></span>

More markdown _here_<span class="token operator">!</span>
</code>`}<!-- HTML_TAG_END --></pre>`;
});
export { Uses as default };
