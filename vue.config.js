const { defineConfig } = require('@vue/cli-service')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/second_app/',
  configureWebpack: {
    plugins: [ new Dotenv() ],
    resolve: {
      alias: {
        "@g": path.resolve(__dirname, process.env.GENERAL_COMPONENTS)
      }
    }
  }
})
