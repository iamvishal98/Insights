import { Alert, Space } from "antd";
import React from "react";

const NoSupport = () => {
  return (
    <div className="no-support">
      <Space direction="vertical">
        <Alert
          className="alert-box"
          message="Warning"
          description="This application is not suppported on the current screen size"
          type="warning"
        />
      </Space>
    </div>
  );
};

export default NoSupport;
