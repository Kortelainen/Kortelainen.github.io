export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-470bc3d7.js","js":["start-470bc3d7.js","chunks/index-df0c0336.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "uses",
				pattern: /^\/uses\/?$/,
				names: [],
				types: [],
				path: "/uses",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/posts.json",
				pattern: /^\/api\/posts\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/posts.json.js')
			},
			{
				type: 'page',
				id: "blog/1",
				pattern: /^\/blog\/1\/?$/,
				names: [],
				types: [],
				path: "/blog/1",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/2",
				pattern: /^\/blog\/2\/?$/,
				names: [],
				types: [],
				path: "/blog/2",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
