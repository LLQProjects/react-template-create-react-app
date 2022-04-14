import en from './en'
import zh_cn from './zh_cn'

import { extend, includes, get } from 'lodash'

const all = extend(
  {},
  {
    zh_cn,
    en
  }
)

const map = extend(
  {},
  {
    zh_cn: '中文',
    en: 'English'
  }
)

export type TLocale = 'zh_cn' | 'en'

let lang = localStorage.getItem('lang') || 'zh_cn'

export default {
  setLang(str: TLocale) {
    if (includes(['zh_cn', 'en'], str)) {
      lang = str
      localStorage.setItem('lang', str)
    } else {
      throw new Error('invalid lang : ' + str)
    }
  },

  getLang() {
    return lang
  },

  get(key: string) {
    if (key.indexOf('/')) {
      // eslint-disable-next-line no-param-reassign
      key = key.replace('/', '.')
    }
    return get(all[lang], key, get(all['en'], key, key))
  },

  getMap(lang: string) {
    return map[lang]
  }
}
