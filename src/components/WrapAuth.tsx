import { IAuthProps } from '@@/types'

// 1.判断是否有权限
// 2.有权限则渲染组件,无权限则不渲染
// 假设从后端拉取到的permission为数组,如果读取到的auth包含在permission中，则渲染按钮
const permission = ['guest', 'admin']

let WrapAuth = (props: IAuthProps): any => {
  let hasAuth = false
  const { auth, children } = props

  if (typeof auth === 'string' && permission.includes(auth)) {
    hasAuth = true
  }

  if (Array.isArray(auth) && auth.length > 0) {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < auth.length; i++) {
      if (permission.includes(auth[i])) {
        hasAuth = true
        break
      }
    }
  }

  return hasAuth ? children : null
}
export default WrapAuth
