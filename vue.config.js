const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://api-vu-dev.topresult.com.br/VitrineUrbana/',
  }
})
