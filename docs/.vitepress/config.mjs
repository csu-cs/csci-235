import mathjax3 from 'markdown-it-mathjax3';
import imageFigures from 'markdown-it-image-figures';
import tableCaptions from 'markdown-it-table-captions';
import markdownItAttrs from 'markdown-it-attrs';

const customElements = ['mjx-container'];


export default {
	lang: 'en-US',
	title: 'CSCI 235',
	description: 'Procedural Programming',
	lastUpdated: true,
	cleanUrls: true,
	base: '/csci-235/',

	// Required to fix https://github.com/vuejs/vitepress/pull/2780
	vite: {
		resolve: {
			preserveSymlinks: true
		}
	},

	head: [
		// Add Favicon
		[ 'link', { rel: 'icon', type: 'image/png', href: '/csci-235/favicon-32x32.png', sizes: '32x32'} ],
		[ 'link', { rel: 'icon', type: 'image/png', href: '/csci-235/favicon-16x16.png', sizes: '16x16'} ],
		[ 'link', { rel: 'apple-touch-icon', href: '/csci-235/apple-touch-icon.png', sizes: '180x180'} ],
		[ 'link', { rel: 'manifest', href: '/csci-235/site.webmanifest'} ],
	],

	markdown: {
		lineNumbers: true,
		defaultHighlightLang: 'cpp',
		config: (md) => {
			md.use(mathjax3);
			md.use(imageFigures, {
				figcaption: 'title',
				copyAttrs: '^class$',
			});
			md.use(tableCaptions);
			md.use(markdownItAttrs);
		},
	},

	themeConfig: {
		logo: {
			light: '/csu-black.svg',
			dark: '/csu-white.svg',
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Syllabus', link: '/syllabus' },
			{ text: 'Integrity', link: '/integrity' },
			{ text: 'Style Guide', link: '/style-guide' },
			{ text: 'Lecture Notes', link: '/notes/01-getting-started' }
		],
		sidebar: {
			'/notes/': sidebarNotes(),
		},

		socialLinks: [
			{
				icon: {
					svg: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg role="img" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><title>Blackboard</title><path d="M 0.60219292,5.2096234 H 5.9433484 q 1.5859404,0 2.3606813,0.136719 0.7838556,0.1276044 1.3945338,0.546876 0.6197925,0.4192716 1.0299495,1.1210957 0.410157,0.6927096 0.410157,1.5585966 0,0.9388038 -0.510417,1.7226593 -0.501303,0.783856 -1.3671903,1.175783 1.2213563,0.35547 1.8776073,1.212242 0.656251,0.856773 0.656251,2.014327 0,0.91146 -0.428386,1.777347 -0.419271,0.856772 -1.157554,1.376304 -0.7291679,0.510418 -1.8046907,0.628908 -0.6744804,0.07292 -3.2539121,0.09115 H 0.60219292 Z M 3.3001145,7.4335857 v 3.0898493 h 1.7682323 q 1.5768258,0 1.959639,-0.04557 0.6927095,-0.08203 1.0846373,-0.473959 0.4010424,-0.4010425 0.4010424,-1.0481791 0,-0.6197928 -0.3463548,-1.002606 Q 7.8300705,7.5611901 7.1555902,7.4791587 6.7545478,7.4335857 4.8495964,7.4335857 Z m 0,5.3138113 v 3.572924 h 2.4974003 q 1.458336,0 1.8502638,-0.08203 0.6015635,-0.109375 0.9752621,-0.528647 0.3828132,-0.428386 0.3828132,-1.139325 0,-0.601563 -0.2916672,-1.020835 Q 8.4225195,13.130211 7.8665289,12.938804 7.319653,12.747397 5.4785038,12.747397 Z" /><path d="M 13.945967,18.571627 V 5.2096234 h 2.561203 v 4.8125086 q 1.184898,-1.3489607 2.807297,-1.3489607 1.768232,0 2.925786,1.2851586 1.157554,1.2760441 1.157554,3.6731841 0,2.479171 -1.184898,3.819017 -1.175783,1.339846 -2.861984,1.339846 -0.829428,0 -1.640628,-0.410157 -0.802085,-0.419272 -1.385419,-1.230471 v 1.421878 z m 2.542974,-5.049489 q 0,1.503909 0.473959,2.223963 0.665366,1.020835 1.768232,1.020835 0.847658,0 1.440107,-0.720053 0.601564,-0.729168 0.601564,-2.287765 0,-1.658857 -0.601564,-2.388025 -0.601563,-0.738283 -1.540367,-0.738283 -0.920575,0 -1.531253,0.720054 -0.610678,0.710938 -0.610678,2.169274 z" /></svg>'
				},
				link: 'https://csuniv.blackboard.com'
			}
		],

		algolia: { //docsearch
			appId: 'US37G3IQE1',
			apiKey: '4a083944bb4122490cfe21afab9ec84b',
			indexName: 'csci-235',
			//container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###'
			debug: 'false' // Set debug to true if you want to inspect the modal
		}
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},
}

function sidebarNotes() {
	return [
		{
			text: 'Introduction',
			collapsed: true,
			items: [
				{ text: 'Getting Started', link: '/notes/01-getting-started' },
				{ text: 'Algorithms and Problem Solving', link: '/notes/01-algorithms' },
				{ text: 'Computers and Programming', link: '/notes/01-computers' },
				{ text: 'Start Programming in C++', link: '/notes/01-start-programming' }
			]
		},
		{
			text: 'C++ Basics',
			collapsed: true,
			items: [
				{ text: 'Creating and Understanding Simple C++ Programs', link: '/notes/02-simple-programs' },
				{ text: 'Operators and Types', link: '/notes/02-operators-and-types' },
				{ text: 'More Basics', link: '/notes/02-more-basics' }
			]
		},
		{
			text: 'Input/Output',
			collapsed: true,
			items: [
				{ text: 'Input', link: '/notes/03-input' },
				{ text: 'Output', link: '/notes/03-output' },
				{ text: 'Files', link: '/notes/03-files' }
			]
		},
		{
			text: 'Conditionals',
			collapsed: true,
			items: [
				{ text: 'If…Else Statements', link: '/notes/04-if-else' },
				{ text: 'Switch Statements', link: '/notes/04-switch' },
				{ text: 'Logic and Math', link: '/notes/04-logic' },
				{ text: 'Readability and Error Checking', link: '/notes/04-prevent-errors'}
			]
		},
		{
			text: 'Repetition',
			collapsed: true,
			items: [
				{ text: 'Loop Design with While Loops', link: '/notes/05-loop-design' },
				{ text: 'Reading from Files with Loops', link: '/notes/05-file-loops' },
				{ text: 'Do…While Loop and For Loops', link: '/notes/05-do-while-for' },
				{ text: 'Random Numbers', link: '/notes/05-random-numbers' }
			]
		},
		{
			text: 'Functions',
			collapsed: true,
			items: [
				{ text: 'Introduction', link: '/notes/06-functions-intro' },
				{ text: 'Scope', link: '/notes/06-scope' },
				{ text: 'Reference Parameters', link: '/notes/06-references' },
				{ text: 'Recursion', link: '/notes/06-recursion' },
				{ text: 'Function Overloading and Default Parameters', link: '/notes/06-function-overloading-default-parameters' },
				{ text: 'Static Variables', link: '/notes/06-static-variables' }
			]
		},
		{
			text: 'Enums and Namespaces',
			collapsed: true,
			items: [
				{ text: 'Enumeration Types', link: '/notes/07-enums' },
				{ text: 'Custom Types', link: '/notes/07-custom-types' },
				{ text: 'Namespaces', link: '/notes/07-namespaces' },
			]
		},
		{
			text: 'Strings',
			collapsed: true,
			items: [
				{ text: 'The String Type', link: '/notes/07-strings' },
			]
		}
		,
		{
			text: 'Arrays',
			collapsed: true,
			items: [
				{ text: 'Intro to Arrays', link: '/notes/08-arrays-intro' },
				{ text: 'Search and Sort', link: '/notes/08-search-and-sort' },
				{ text: 'Enums as Array Indexes', link: '/notes/08-enums-as-array-indexes' },
				{ text: 'Parallel Arrays', link: '/notes/08-parallel-arrays' },
				{ text: 'Multidimensional Arrays', link: '/notes/08-2d-arrays' },
				{ text: 'Arrays as Strings', link: '/notes/08-arrays-strings' },
				{ text: 'The Visual Studio IDE', link: '/notes/08-ide' }
			]
		},
		{
			text: 'Structs',
			collapsed: true,
			items: [
				{ text: 'Introduction to Structs', link: '/notes/09-structs-intro' },
				{ text: 'Structs and Arrays, Together', link: '/notes/09-structs-and-arrays.md' }
			]
		}
	]
}