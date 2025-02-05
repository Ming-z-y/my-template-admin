import { FC } from "react";
import { Card, Descriptions, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const UserProfile: FC = () => {
  return (
    <Card
      title="个人信息"
      bordered={false}
      extra={<Button icon={<EditOutlined />}>编辑</Button>}
    >
      <Descriptions column={1}>
        <Descriptions.Item label="姓名">张三</Descriptions.Item>
        <Descriptions.Item label="职位">前端工程师</Descriptions.Item>
        <Descriptions.Item label="所属部门">技术部</Descriptions.Item>
        <Descriptions.Item label="联系电话">138-1234-5678</Descriptions.Item>
        <Descriptions.Item label="电子邮箱">
          zhangsan@example.com
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default UserProfile;
