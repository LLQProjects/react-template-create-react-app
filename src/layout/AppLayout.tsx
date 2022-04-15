import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { dynamicRoutes } from '@/route'
import type { BasicLayoutProps } from '@ant-design/pro-layout'
import Logo from '@/assets/logo.svg'
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout'

export default () => {
  const { pathname } = useLocation()
  const menuItemRender = (item: any) => {
    console.log('item', item)
    return <Link to={item.path!}>{item.name}</Link>
  }
  /**
   * 自定义渲染头部
   * @returns ReactNode
   */
  const headerContentRender = () => {
    return (
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    )
  }
  const [collapsed, setCollapsed] = useState(false)
  const MenuData = (dynamicRoutes: MenuDataItem[], parentPath: string): MenuDataItem[] => {
    return dynamicRoutes.map(({ icon, children = [], path, meta, ...item }) => ({
      ...item,
      name: meta.title,
      path: path,
      icon: meta?.icon,
      hideInMenu: meta?.hidden,
      children: children && MenuData(children, `${parentPath}${path}.`)
    }))
  }
  const props: BasicLayoutProps = {
    location: {
      pathname
    },
    navTheme: 'light',
    collapsed,
    fixSiderbar: true,
    collapsedButtonRender: false
  }
  return (
    <ProLayout
      {...props}
      fixedHeader
      logo={Logo}
      menuDataRender={() => MenuData(dynamicRoutes, '')}
      title=""
      onCollapse={setCollapsed}
      headerContentRender={headerContentRender}
      menuItemRender={(item) => menuItemRender(item)}
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ProLayout>
  )
}
