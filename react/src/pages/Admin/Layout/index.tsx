import { FC } from "react";
import { Layout, Menu, theme, Button } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  TagsOutlined,
  TeamOutlined,
  LogoutOutlined,
  LockOutlined,
  DeploymentUnitOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";

const { Header, Content, Sider } = Layout;

const AdminLayout: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "仪表盘",
      path: "/dashboard",
    },
    { key: "2", icon: <TagsOutlined />, label: "任务大厅", path: "/tasks" },
    { key: "3", icon: <TeamOutlined />, label: "人员管理", path: "/users" },
    {
      key: "4",
      icon: <LockOutlined />,
      label: "权限管理",
      path: "/permissions",
    },
    {
      key: "5",
      icon: <DeploymentUnitOutlined />,
      label: "任务分配",
      path: "/assignments",
    },
    { key: "6", icon: <UserOutlined />, label: "个人信息", path: "/profile" },
  ];

  const selectedKey =
    items.find((item) => location.pathname.startsWith(item.path))?.key || "1";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={240} className={styles.sider}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
          后台管理系统
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          className={styles.menu}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              className={styles.menuItem}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div style={{ float: "right", marginRight: 20 }}>
            <Button
              type="text"
              icon={<LogoutOutlined />}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              退出登录
            </Button>
          </div>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
