import { FC } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const Login: FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: { username: string; password: string }) => {
    if (values.username === "admin" && values.password === "admin123") {
      localStorage.setItem("token", "fake-jwt-token");
      message.success("登录成功!");
      navigate("/");
    } else {
      message.error("用户名或密码错误!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>欢迎回来</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
            className={styles.formItem}
          >
            <Input placeholder="用户名" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
            className={styles.formItem}
          >
            <Input.Password placeholder="密码" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className={styles.submitButton}
            >
              登录
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.footer}>
          没有账号？<a href="/register">立即注册</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
