import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/styles/global.css',
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs',
      baseUrl: 'https://ionicframework.com/docs',
      serviceWorker: null,
      copy: [
        { src: 'pages/**/*.json' },
        { src: 'demos' },
        { src: 'components/color-gen/demo/index.html', dest: 'pages/theming/color-generator/index.html' },
        { src: '../node_modules/@ionic/core', dest: 'assets/ionic' }
      ]
    }
  ]
};
