import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, Dropdown, Row, Col, Tooltip, Image } from 'antd'
import Logo from '@/assets/logo.svg'
import Language from '@/assets/language.svg'
import './AppLayout.less'
import { dynamicRoutes } from '@/route'
import { FolderOutlined } from '@ant-design/icons'
import MaterialModal from '@/components/MaterialModal'
import { useState } from 'react'
import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout'
import { useTranslation } from 'react-i18next'
import { langList } from '@/locale'

function AppHeader({ onLangChange }: { onLangChange: (lang: string) => void }) {
  const [materialVisible, setMaterialVisible] = useState(false)

  return (
    <Row gutter={16}>
      <Col>
        <Tooltip title="物料库">
          <FolderOutlined onClick={() => setMaterialVisible(true)} />
        </Tooltip>
        <MaterialModal visible={materialVisible} onCancel={() => setMaterialVisible(false)} />
      </Col>
      <Col>
        <Dropdown
          overlay={
            <Menu onClick={(e) => onLangChange(e.key)}>
              {langList.map((item) => (
                <Menu.Item key={item.key}>
                  <a>{item.text}</a>
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <Image src={Language} preview={false} onClick={(e) => e.preventDefault()} />
        </Dropdown>
      </Col>
    </Row>
  )
}

export default function AppLayout() {
  const { t, i18n } = useTranslation()

  /**
   * 菜单树递归
   * @param dynamicRoutes 动态路由
   * @param parentPath 父路径
   * @returns
   */
  const MenuData = (dynamicRoutes: MenuDataItem[], parentPath: string): MenuDataItem[] =>
    dynamicRoutes.map(({ icon, children = [], path, meta, ...item }) => ({
      ...item,
      name: t(`router.${parentPath}${path}`),
      path: path,
      icon: meta?.icon,
      hideInMenu: meta?.hidden,
      children: children && MenuData(children, `${parentPath}${path}.`)
    }))

  const { pathname } = useLocation()

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang)
    // Todo
    // 1. set dayjs locale
    // 2. set antd configprovider locale
    // 3. use redux to set lang
    // dayjs.locale(lang === 'zh-CN' ? 'zh-cn' : 'en')
  }

  return (
    <ProLayout
      fixSiderbar
      fixedHeader
      logo={Logo}
      title={false}
      defaultCollapsed
      location={{ pathname }}
      waterMarkProps={{
        // after user info will replace it
        content: 'COCOS'
      }}
      menuDataRender={() => MenuData(dynamicRoutes, '')}
      // eslint-disable-next-line react/no-unstable-nested-components
      rightContentRender={() => <AppHeader onLangChange={handleLangChange} />}
      // eslint-disable-next-line react/no-unstable-nested-components
      menuItemRender={({ path }) => {
        return <Link to={path!}>{t(`router${path?.replace(/\//g, '.')}`)}</Link>
      }}
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ProLayout>
  )
}
