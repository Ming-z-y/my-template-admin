import { FC } from "react";
import { Card, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface User {
  key: string;
  name: string;
  role: "admin" | "editor" | "viewer";
  status: "active" | "inactive";
}

const UserManager: FC = () => {
  const users: User[] = [
    { key: "1", name: "张三", role: "admin", status: "active" },
    { key: "2", name: "李四", role: "editor", status: "active" },
    { key: "3", name: "王五", role: "viewer", status: "inactive" },
  ];

  const columns: ColumnsType<User> = [
    { title: "姓名", dataIndex: "name", key: "name" },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      render: (role: User["role"]) => {
        const color = {
          admin: "volcano",
          editor: "geekblue",
          viewer: "green",
        }[role];
        return <Tag color={color}>{role}</Tag>;
      },
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: User["status"]) => {
        const color = status === "active" ? "green" : "volcano";
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <Card title="人员管理">
      <Table columns={columns} dataSource={users} />
    </Card>
  );
};

export default UserManager;
