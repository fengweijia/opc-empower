/** OPC赚钱军师 - Taro全局配置 */
module.exports = {
  projectName: 'opc-money-agent',
  date: '2026-3-3',
  designWidth: 375,
  deviceRatio: {
    375: 2 / 1,
    640: 2 / 1,
    750: 2 / 1,
    828: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [
      {
        from: 'src/assets/tabbar',
        to: 'assets/tabbar'
      }
    ],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [' Braun']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024
        }
      },
      cssModules: {
        enable: false,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    router: {
      mode: 'hash',
      customRoutes: {}
    },
    vite: {}
  }
}
