import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**', '.supabase/**'],
  },

  /* Browser environment so 'window', 'document', etc. are defined */
  {
    languageOptions: {
      globals: { ...globals.browser }
    },
  },

  /* Base Javascript rules (same as "eslint:recommended") */
  js.configs.recommended,

  /* Turn off stylistic rules that clash with Prettier */
  prettierConfig,

  {
    plugins: { import: importPlugin },
    rules: {
      /* Ignore Vite asset imports like '/vite.svg' */
      'import/no-unresolved': [
	'error',
	{ ignore: [
	    '^/vite\\.svg$',
	    '^\\.\\/javascript\\.svg$',
	  ]
	},
      ],
    },
  },
];
