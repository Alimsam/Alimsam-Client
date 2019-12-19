module.exports = { 
    devServer: {
      proxy: { 
       '^/': { 
          target: 'http://10.120.73.120:3000',
          ws: true,
          changeOrigin: true,
        } 
      } 
    },
    outputDir: '../backend/public',
  }