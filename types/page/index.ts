/**
 * 资源信息
 */
export interface ISourceItem {
  /**
   * id值
   */
  id: number
  /**
   * 名称（标题）
   */
  name?: string
  /**
   * 资源存放地址
   */
  url: string
  /**
   * 说明
   */
  desc?: string
  /**
   * 上传时间
   */
  createdAt?: number
  /**
   * 上传者
   */
  uploadByUser?: string
}

/**
 * 图片详情弹窗接收参数
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type IImgModalProps = {
  /**
   * 弹窗可见
   */
  visible: boolean
  /**
   * 图片详情
   */
  detail?: ISourceItem
  /**
   * 取消回调
   */
  onCancel: () => void
}

/**
 * 新建资源分组
 */
export interface IGroupItem {
  /**
   *组id
   */
  id: number
  /**
   * 组名
   */
  name: string
}

/**
 * 获取图片元信息
 */
export interface IImgAttribute {
  /**
   * 宽度
   */
  width: number
  /**
   * 高度
   */
  height: number
  /**
   * 大小
   */
  sizes: string
}

/**
 * tags
 */
export interface ITag {
  /**
   * 标签展示值
   */
  label: string
  /**
   * key值
   */
  value: string
  /**
   * 背景色
   */
  color?: string
}

/**
 * 文章
 */
export interface IArticleItem {
  /**
   * id值
   */
  id: number
  /**
   * 标题
   */
  title: string
  /**
   * 封面图地址
   */
  imgsrc: string
  /**
   * 所属分类
   */
  type: string
  /**
   * 语言类别
   */
  lang: string
  /**
   * 作者
   */
  author: string
  /**
   * 标签分类
   */
  tags: ITag[]
  /**
   * 状态
   */
  status: string
  /**
   * 发布时间（时间戳）
   */
  created_at?: number
  /**
   * 发布者
   */
  createbyuser: string
  /**
   * 预览链接
   */
  url: string
}
