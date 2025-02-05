import { FC } from "react";
import { Card, Table, Tag, Switch } from "antd";
import type { ColumnsType } from "antd/es/table";

interface Permission {
  key: string;
  role: string;
  access: string[];
  status: boolean;
}

const PermissionManagement: FC = () => {
  const permissions: Permission[] = [
    { key: "1", role: "管理员", access: ["全部权限"], status: true },
    {
      key: "2",
      role: "项目经理",
      access: ["任务管理", "人员查看"],
      status: true,
    },
    { key: "3", role: "普通成员", access: ["任务查看"], status: true },
  ];

  const columns: ColumnsType<Permission> = [
    { title: "角色", dataIndex: "role", key: "role" },
    {
      title: "权限范围",
      dataIndex: "access",
      key: "access",
      render: (access: string[]) => (
        <>
          {access.map((item) => (
            <Tag key={item} color="blue">
              {item}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => (
        <Switch
          checked={status}
          onChange={(checked) => console.log("状态变更:", checked)}
        />
      ),
    },
  ];

  return (
    <Card title="权限管理" bordered={false}>
      <Table columns={columns} dataSource={permissions} pagination={false} />
    </Card>
  );
};

export default PermissionManagement;
