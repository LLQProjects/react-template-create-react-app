import { ChangeCase, defineConfig } from 'yapi-to-typescript'

/**
 * 将方法名称转换为函数名称
 * @param {string} operation_name 方法名称 eg: a.b.c.d
 * @param {string} method 请求方法 eg: put get post...
 * @return {string} eg: "a b c"
 */
const getRequestFuncName = (operation_name: string, method: string) => {
  let funcNameArr = operation_name.split('.')
  if (funcNameArr.length > 2) {
    // 去头去尾
    funcNameArr.pop()
    funcNameArr.shift()
  }
  // 将请求的方法放入队首
  funcNameArr.unshift(method.toLocaleLowerCase())

  return funcNameArr.join(' ')
}

// 获取请求函数的名称
const getRequestFunctionName = (interfaceInfo, changeCase: ChangeCase) => {
  const { operation_name, method } = interfaceInfo

  // 以接口全路径生成请求函数名
  return changeCase.camelCase(getRequestFuncName(operation_name, method))
}

// 获取请求数据类型的名称
const getRequestDataTypeName = (interfaceInfo, changeCase: ChangeCase) => {
  const { operation_name, method } = interfaceInfo

  // 以接口全路径生成请求函数名
  return changeCase.pascalCase('IRequest ' + getRequestFuncName(operation_name, method))
}

// 获取请求数据类型的名称
const getResponseDataTypeName = (interfaceInfo, changeCase: ChangeCase) => {
  const { operation_name, method } = interfaceInfo

  // 以接口全路径生成请求函数名
  return changeCase.pascalCase('IResponse ' + getRequestFuncName(operation_name, method))
}

export default defineConfig([
  {
    serverUrl: 'http://yapi.cocos.org',
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false
    },
    comment: {
      enabled: true,
      requestHeader: false,
      extraTags: (interfaceInfo) => {
        const { status } = interfaceInfo
        return [{ name: '状态', value: status === 'done' ? '已完成' : '未完成' }]
      }
    },
    prodEnvName: 'production',
    outputFilePath: 'src/api/index.ts',
    requestFunctionFilePath: 'src/api/request.ts',
    // 获取请求函数的名称
    getRequestFunctionName,
    // 获取请求数据类型的名称
    getRequestDataTypeName,
    // 获取请求数据类型的名称
    getResponseDataTypeName,
    projects: [
      {
        token: 'aca1a88453c542467c0918a95617b587502e8a5a11ca5dbf1f26891d36d87677',
        categories: [{ id: 0 }]
      },
      {
        token: '249085752b6ff96b087d657d3fb56ba5dbc7384dd92da1b8344a4e569874bb2e',
        categories: [{ id: [686] }]
      }
    ]
  }
])
