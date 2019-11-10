module.exports = {
  solution: '@nowa/solution-react-typescript',
  config: {
    build: [
      {
        browsers: [
          'iOS >= 7',
          'Android >= 2.3',
          'FireFoxAndroid >= 46',
          '> 1%',
        ].join(','),
        cssModules: false,
      },
    ],
    server: [
      {
        browsers: [
          'iOS >= 7',
          'Android >= 2.3',
          'FireFoxAndroid >= 46',
          '> 1%',
        ].join(','),
        cssModules: false,
      },
    ],
  },
};
