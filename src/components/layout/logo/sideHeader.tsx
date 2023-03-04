import { Space } from "antd";
import logo from '@/assets/images/logo.png'

const SideHead: React.FC<{ collpased: boolean }> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        color: 'white',
        margin: '16px 0'
      }}
    >
      <Space>
        <div>
          <img
            src={logo}
            style={{
              height: '32px'
            }}
          />
        </div>
        {
          !props.collpased && <div>如果科技</div>
        }
      </Space>
    </div>
  );
}
export default SideHead;