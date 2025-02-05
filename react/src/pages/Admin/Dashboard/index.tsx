import { FC } from "react";
import { Row, Col, Card, Statistic, Progress } from "antd";
import {
  UserOutlined,
  TagsOutlined,
  CheckCircleOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";

const Dashboard: FC = () => {
  return (
    <div className={styles.container}>
      <Row gutter={[16, 16]} className={styles.statsContainer}>
        <Col xs={24} sm={12} md={6}>
          <Card className={styles.statCard}>
            <Statistic
              title="总用户数"
              value={1128}
              prefix={<UserOutlined />}
              valueStyle={{ color: "var(--success-color)" }}
            />
          </Card>
        </Col>
        {/* 其他统计卡片类似... */}
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <div className={styles.progressSection}>
            <h3 style={{ marginBottom: 24 }}>任务进度</h3>
            {/* 进度条内容 */}
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className={styles.quickActions}>
            <Card className={styles.quickActionCard}>
              <TagsOutlined style={{ fontSize: 32, marginBottom: 8 }} />
              <div>任务大厅</div>
            </Card>
            {/* 其他快捷入口类似... */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
