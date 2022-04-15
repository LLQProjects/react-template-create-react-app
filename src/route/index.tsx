import AppLayout from '@/layout/AppLayout'
import Home from '@/pages/home'
import NotFoundPage from '@/pages/404'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IRouteItem } from '@@/types/index'

/**
 * 动态路由
 */
export const dynamicRoutes: IRouteItem[] = [
  {
    path: '/home',
    component: <AppLayout />,
    meta: { title: '菜单' },
    children: [
      {
        path: '',
        component: <Home />,
        meta: {
          title: '子菜单',
          hidden: true,
          icon: <AppstoreAddOutlined />
        }
      }
    ]
  }
]

/**
 * 基础路由
 */
export const baseRoutes: IRouteItem[] = [
  {
    path: '/',
    component: <AppLayout />
  },
  {
    path: '*',
    component: <NotFoundPage />
  }
]

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {dynamicRoutes.concat(baseRoutes).map((route) => {
          if (!route.children) {
            return <Route key={route.path} path={route.path} element={route.component} />
          }
          return (
            <Route key={route.path} path={route.path} element={route.component}>
              {route.children.map((child) => {
                return <Route key={`${route.path}/${child.path}`} path={child.path} element={child.component} />
              })}
            </Route>
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
