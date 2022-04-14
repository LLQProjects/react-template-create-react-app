/**
 * 上传文件参数
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type IFileItem = {
  /**
   * 接受上传的文件类型
   */
  accept?: string
  /**
   * 上传的地址
   */
  action?: string
  /**
   * 上传所需额外参数或返回上传额外参数的方法
   */
  data?: object

  files?: any
  onChange?: () => void
}

export type TUploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed'

/**
 * 按钮权限参数
 */
export interface IAuthProps {
  /**
   * 权限集合
   */
  auth: string[] | string
  /**
   * 组件
   */
  children?: JSX.Element
}
