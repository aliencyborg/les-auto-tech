/* global module */

module.exports = {
  theme: {
    extend: {
      colors: {
        'deep-blue': '#000099'
      }
    },
    fontFamily: {
      // Tailwind defaults:
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      // serif: 'Georgia, Cambria, Times New Roman, Times, serif',
      mono: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',

      // My fonts
      base: 'acumen-pro, sans-serif',
      logo: 'cooper-black-std, serif',
      serif: 'kepler-std, Times, serif',
      modern: 'termina, sans-serif'
    }
  },
  variants: {},
  plugins: []
}
