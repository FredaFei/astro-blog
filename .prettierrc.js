/** @type {import("@types/prettier").Options} */
module.exports = {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss" /* Must come last */],
	overrides: [
		{
			files: "**/*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: ["*.mdx", "*.md"],
			options: {
				printWidth: 80,
			},
		},
		{
      "files": "*.css",
      "options": {
        "parser": "css",
        "cssSyntax": "css",
        // "insertPragma": true,
        // "requirePragma": false,
        // 关键配置：禁止在 ! 前添加空格
        "embeddedLanguageFormatting": "off",
				// 直接替换 ! 后的空格
        // format: (text) => {
        //   return text.replace(/\s!+/g, '!');
        // }
      }
    }
	],
};
