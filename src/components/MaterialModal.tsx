import { Image, Modal, Tabs, Checkbox, List } from 'antd'
import { IImgModalProps, ISourceItem } from '@@/types'
import { ERROR_IMG, MODAL_LARGE_WIDTH, MODAL_BODY_LARGE_HEIGHT, FULL_WIDTH } from '@/utils/const'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'

const { TabPane } = Tabs

const picList: ISourceItem[] = [
  {
    id: 1,
    url: 'https://download.cocos.com/CocosUdc/promotion/52a373219c01230eae1d602d2d086db9.jpg',
    name: '232323'
  }
]

const MaterialModal = (props: IImgModalProps) => {
  const { visible, onCancel } = props

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues)
  }

  const handleOk = () => {
    console.log('confirm')
  }

  return (
    <Modal
      title="素材库"
      visible={visible}
      width={MODAL_LARGE_WIDTH}
      onCancel={onCancel}
      onOk={handleOk}
      bodyStyle={{ height: MODAL_BODY_LARGE_HEIGHT, overflowY: 'scroll' }}
    >
      <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="图片" key="pics">
          <Checkbox.Group style={{ width: FULL_WIDTH }} onChange={onChange}>
            <List
              pagination={{
                showSizeChanger: false
              }}
              className="material__list"
              grid={{ gutter: 20, column: 6 }}
              dataSource={picList}
              renderItem={(item: ISourceItem) => (
                <List.Item className="material__item">
                  <Image src={item.url} preview={false} fallback={ERROR_IMG} />
                  <Checkbox value={item} className="material__mask" />
                </List.Item>
              )}
            />
          </Checkbox.Group>
        </TabPane>
        <TabPane tab="视频" key="video">
          视频
        </TabPane>
        <TabPane tab="音频" key="audio">
          音频
        </TabPane>
      </Tabs>
    </Modal>
  )
}

export default MaterialModal
