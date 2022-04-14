/* eslint-disable @typescript-eslint/no-require-imports */
const CracoAntDesignPlugin = require('@mrbatman/craco-antd')
const { resolve } = require('path')
const WebpackBar = require('webpackbar')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

// Don't open the browser during development
process.env.BROWSER = 'none'

const pathResolve = (dir) => {
  return resolve(__dirname, dir)
}

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src/'),
      '@@': pathResolve('types/')
    },
    plugins: [new WebpackBar({ profile: true }), new AntdDayjsWebpackPlugin()]
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
}
