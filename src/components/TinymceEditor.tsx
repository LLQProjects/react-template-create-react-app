/**
 * Tinymce 6.0.1
 *
 * docs see https://www.tiny.cloud/docs/tinymce/6/
 * language pack see https://www.tiny.cloud/get-tiny/language-packages/
 */

import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export interface IEditorProps {
  value?: string
  onChange?: (value: string) => void
  /**
   * tinymce工具栏
   * [查看具体内容](https://www.tiny.cloud/docs/tinymce/6/available-toolbar-buttons/)
   */
  toolbar?: string | string[]
  /**
   * 编辑器高度
   * default 500px
   */
  height?: number | string
  /**
   * 编辑器菜单
   */
  menu?: string | string[]
  /**
   * 语言
   */
  language?: string
  /**
   * 是否自动切换语言
   */
  autoDetectAanguage?: boolean
}

const DEFAULT_TOOLBAR =
  'undo redo | bold italic underline strikethrough | fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | emoticons | fullscreen'
// 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'

const DEFAULT_HEIGHT = 500

const DEFAULT_PLUGIN = 'wordcount table searchreplace lists advlist link fullscreen emoticons autolink image media'

export const TinymceEditor: React.FC<IEditorProps> = ({
  value,
  onChange,
  toolbar,
  height,
  language,
  autoDetectAanguage
}) => {
  let lang = language
  if (autoDetectAanguage !== false) {
    const { i18n } = useTranslation()
    lang = i18n.language === 'zh-CN' ? 'zh-Hans' : ''
  }
  return (
    <Editor
      value={value}
      init={{
        height: height || DEFAULT_HEIGHT,
        language: lang,
        removed_menuitems: 'export print fontfamily visualaid',
        toolbar_mode: 'wrap'
        // file_picker_callback: (callback, value, meta) => {
        //   console.log(callback, value, meta)
        //   // Provide file and text for the link dialog
        //   if (meta.filetype === 'file') {
        //     callback('mypage.html', { text: 'My text' })
        //   }

        //   // Provide image and alt text for the image dialog
        //   if (meta.filetype === 'image') {
        //     callback('myimage.jpg', { alt: 'My alt text' })
        //   }

        //   // Provide alternative source and posted for the media dialog
        //   if (meta.filetype === 'media') {
        //     callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' })
        //   }
        // }
      }}
      plugins={DEFAULT_PLUGIN}
      toolbar={toolbar || DEFAULT_TOOLBAR}
      onEditorChange={(content) => onChange?.(content)}
      tinymceScriptSrc="/tinymce/tinymce.min.js"
    />
  )
}
