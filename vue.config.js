module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common'
      }
    },
  },
  runtimeCompiler: true,
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://localhost:3000/api",
        "ws": true,
        "changeOrigin": true
      }
    }
  },
  "outputDir": "../Alimsam-Server/public"
}