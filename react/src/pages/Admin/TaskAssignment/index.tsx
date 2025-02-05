import { FC } from "react";
import { Card, Form, Input, Select, DatePicker, Button } from "antd";

const TaskAssignment: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("任务分配:", values);
  };

  return (
    <Card title="任务分配" bordered={false}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="任务名称"
          name="taskName"
          rules={[{ required: true, message: "请输入任务名称" }]}
        >
          <Input placeholder="例如：开发登录页面" />
        </Form.Item>

        <Form.Item
          label="分配给"
          name="assignee"
          rules={[{ required: true, message: "请选择分配人员" }]}
        >
          <Select
            options={[
              { value: "1", label: "张三" },
              { value: "2", label: "李四" },
              { value: "3", label: "王五" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="截止时间"
          name="deadline"
          rules={[{ required: true, message: "请选择截止时间" }]}
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            分配任务
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TaskAssignment;
