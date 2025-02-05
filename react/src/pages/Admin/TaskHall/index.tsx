import { FC } from "react";
import { Card, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface Task {
  key: string;
  title: string;
  status: "pending" | "in-progress" | "completed";
  assignee: string;
}

const TaskHall: FC = () => {
  const tasks: Task[] = [
    { key: "1", title: "开发登录页面", status: "completed", assignee: "张三" },
    {
      key: "2",
      title: "实现用户管理功能",
      status: "in-progress",
      assignee: "李四",
    },
    { key: "3", title: "优化系统性能", status: "pending", assignee: "王五" },
  ];

  const columns: ColumnsType<Task> = [
    { title: "任务名称", dataIndex: "title", key: "title" },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: Task["status"]) => {
        const color = {
          pending: "volcano",
          "in-progress": "geekblue",
          completed: "green",
        }[status];
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: "负责人", dataIndex: "assignee", key: "assignee" },
  ];

  return (
    <Card title="任务大厅">
      <Table columns={columns} dataSource={tasks} />
    </Card>
  );
};

export default TaskHall;
