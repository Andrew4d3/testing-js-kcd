const isProd = String(process.env.NODE_ENV) === 'production'
// (2) First, we need to determine the environment we're running on
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    // (3) So if we're running on test env, we're going to use the commonjs modules so that it can run on node
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'babel-plugin-emotion',
      {
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
      },
    ],
    'react-loadable/babel',
  ].filter(Boolean),
}
