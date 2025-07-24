import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**', '.supabase/**'],
  },

  js.configs.recommended,

  prettierConfig,

  {
    plugins: { import: importPlugin },
    rules: {
      'import/no-unresolved': 'error',
    },
  },
];
