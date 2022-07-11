module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'eslint:recommended'
		// 'prettier'
		// 'plugin:vue/vue3-recommended',
	],
	plugins: [],
	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'arrow-parens': 'off',
		semi: ['error', 'never'],
		'linebreak-style': 'off',
		'no-unused-vars': 'warn',
		'no-tabs': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: {
					var: 2,
					let: 2,
					const: 3
				}
			}
		],
		quotes: ['error', 'single'],
		'comma-dangle': 'off',
		// "max-len": [2, 80, 2],
		// 'max-len': ['error', 80],
		'vue/max-len': [
			'warn',
			{
				code: 90,
				template: 80,
				tabWidth: 2,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true
			}
		],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': [
			'warn',
			{
				singleline: {
					max: 2,
					allowFirstLine: true
				},
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		],
		'vue/singleline-html-element-content-newline': [
			'warn',
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: ['h1', 'button']
			}
		],
		'nuxt/no-this-in-fetch-data': 'off',
		'space-before-function-parentheses': 'off',
		'space-before-function-paren': 'off',
		curly: 'off',
		'spaced-comment': 'off',
	}
}
