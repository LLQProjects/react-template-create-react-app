import { Upload, Button } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { useEffect, useState } from 'react'
import { IFileItem } from '@@/types'

const CCUpload = (props: IFileItem) => {
  // const { onChange } = props
  const [fileList, setFileList] = useState([])
  const handleChange = (info: UploadChangeParam<UploadFile>) => {
    setFileList([])
    console.log(info)
  }

  // 在FormI.tem中进行双向绑定
  useEffect(() => {
    // onChange('xxx')
  }, [fileList])

  const handleBeforeUpload = () => {}
  return (
    <Upload
      name="upload"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={handleBeforeUpload}
      onChange={handleChange}
    >
      <Button type="primary">上传</Button>
    </Upload>
  )
}

export default CCUpload
