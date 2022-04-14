// import the original type declarations
import 'react-i18next'
// import all namespaces (for the default language, only)
import zh from '../src/locale/lang/zh-CN'
import en from '../src/locale/lang/en'

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    ns1: typeof zh
    ns2: typeof en
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'zh-CN'
    // custom resources type
    resources: {
      ns1: typeof zh
      ns2: typeof en
    }
  }
}
