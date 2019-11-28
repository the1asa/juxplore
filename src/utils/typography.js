import Typography from 'typography';

import lincolnTheme from 'typography-theme-lincoln';

lincolnTheme.googleFonts = [
  {
    name: 'Open Sans',
    styles: [
      '300',
      '400',
      '500',
      '600',
      '700'
    ],
  }
];
lincolnTheme.headerFontFamily = ['Open Sans', 'sans-serif'];
lincolnTheme.bodyFont = ['Open Sans', 'sans-serif'];

const typography = new Typography(lincolnTheme);

export default typography;
