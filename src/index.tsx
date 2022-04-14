import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import dayjs from 'dayjs'
import AppRouter from './route'
dayjs.locale('zh-cn')

import './locale'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zh_CN}>
        <AppRouter />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
