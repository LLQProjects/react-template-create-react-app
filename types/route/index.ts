/**
 * 路由
 */
export interface IRouteItem {
  /**
   * 请求路径
   * 非顶级路径无需以 / 开头，将会自动拼接其父级
   */
  path: string
  /**
   * 当前路径对应的页面组件
   */
  component: JSX.Element
  /**
   * 子路由
   */
  children?: Omit<IRouteItem, 'children'>[]
  /**
   * 路由额外信息
   */
  meta?: IRouteItemMeta
}

/**
 * 路由额外信息
 */
export interface IRouteItemMeta {
  /**
   * 当前路由地址是否需要显示在路由菜单中
   * default: true
   */
  hidden?: boolean
  /**
   * 标题
   * hidden为true时必填
   * 此项将会根据I18N的配置获取菜单名称
   */
  title?: string
  /**
   * 图标
   */
  icon?: JSX.Element
  /**
   * 当前路由地址是否支持添加到面包屑
   * default: true
   */
  breadcrumb?: boolean
}
