import { IImgAttribute } from '@@/types'

/**
 * 图片url获取图片元信息
 * @param url 图片url
 * @returns
 */
export async function getImageMetaData(url: string) {
  const imageFile: IImgAttribute = { width: 0, height: 0, sizes: '' }
  let img: HTMLImageElement = new Image()
  img.setAttribute('crossOrigin', 'anonymous')
  img.onload = await function () {
    imageFile['width'] = img.width
    imageFile['height'] = img.height
    imageFile['sizes'] = img.sizes
  }
  img.src = url
  return imageFile
}
