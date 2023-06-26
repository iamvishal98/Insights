import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Statistic } from "antd";
import React from "react";
import "./statcard.css";

const StatCard = ({ title, value, changeTitle, changeValue, increase }) => {
  return (
    <Col sm={12} md={12} lg={6} xl={6}>
      <div className="stat-card">
        <Card>
          <div className="top">
            <Statistic title={title} value={value} />
          </div>
          <div className="bottom">
            <Statistic
              title={changeTitle}
              value={Math.abs(changeValue)}
              precision={2}
              valueStyle={{ color: increase ? "#3f8600" : "#cf1322" }}
              prefix={increase ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="%"
            />
          </div>
        </Card>
      </div>
    </Col>
  );
};

export default StatCard;
