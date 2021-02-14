module.exports = {
  devServer: {
    proxy: {
      '/plm': {
        target: 'https://api.it120.cc',
        changeOrigin: true,
        pathRewrite: {
          '^/plm': '/plm'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 把px单位换算成rem单位
          require("postcss-pxtorem")({
            rootValue: 32, // 换算的基数(设计图750的根字体为75)
            selectorBlackList: [".van"],// 要忽略的选择器并保留为px。
            propList: ["*"], //可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  }
}