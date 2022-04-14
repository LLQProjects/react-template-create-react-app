/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from './request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_1 = 'http://yapi.cocos.org/mock/132' as any
const devUrl_0_0_0_1 = '' as any
const prodUrl_0_0_0_1 = '' as any
const dataKey_0_0_0_1 = undefined as any

/**
 * 接口 [获取当前登录用户基本信息↗](http://yapi.cocos.org/project/132/interface/api/1966) 的 **请求类型**
 *
 * @分类 [User↗](http://yapi.cocos.org/project/132/interface/api/cat_690)
 * @标签 `UserIsOnline`
 * @更新时间 `2022-03-29 18:40:18`
 * @状态 未完成
 */
export interface TRequestGetUsersInfo {}

/**
 * 接口 [获取当前登录用户基本信息↗](http://yapi.cocos.org/project/132/interface/api/1966) 的 **返回类型**
 *
 * @分类 [User↗](http://yapi.cocos.org/project/132/interface/api/cat_690)
 * @标签 `UserIsOnline`
 * @更新时间 `2022-03-29 18:40:18`
 * @状态 未完成
 */
export interface TResponseGetUsersInfo {
  code: number
  msg: string
  data: {
    username: string
    email: string
  }
}

/**
 * 接口 [获取当前登录用户基本信息↗](http://yapi.cocos.org/project/132/interface/api/1966) 的 **请求配置的类型**
 *
 * @分类 [User↗](http://yapi.cocos.org/project/132/interface/api/cat_690)
 * @标签 `UserIsOnline`
 * @更新时间 `2022-03-29 18:40:18`
 * @状态 未完成
 */
type GetUsersInfoRequestConfig = Readonly<
  RequestConfig<'http://yapi.cocos.org/mock/132', '', '', '/server/users/info', undefined, string, string, true>
>

/**
 * 接口 [获取当前登录用户基本信息↗](http://yapi.cocos.org/project/132/interface/api/1966) 的 **请求配置**
 *
 * @分类 [User↗](http://yapi.cocos.org/project/132/interface/api/cat_690)
 * @标签 `UserIsOnline`
 * @更新时间 `2022-03-29 18:40:18`
 * @状态 未完成
 */
const getUsersInfoRequestConfig: GetUsersInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/server/users/info',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUsersInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取当前登录用户基本信息↗](http://yapi.cocos.org/project/132/interface/api/1966) 的 **请求函数**
 *
 * @分类 [User↗](http://yapi.cocos.org/project/132/interface/api/cat_690)
 * @标签 `UserIsOnline`
 * @更新时间 `2022-03-29 18:40:18`
 * @状态 未完成
 */
export const getUsersInfo = /*#__PURE__*/ (requestData?: TRequestGetUsersInfo, ...args: UserRequestRestArgs) => {
  return request<TResponseGetUsersInfo>(prepare(getUsersInfoRequestConfig, requestData), ...args)
}

getUsersInfo.requestConfig = getUsersInfoRequestConfig

/* prettier-ignore-end */
