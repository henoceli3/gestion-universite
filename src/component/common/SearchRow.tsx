import React from "react";
import { Button, Col, Row, Spin } from "antd";
import FormContainer from "./FormContainer.js";

interface SearchRowProps {
  children: React.ReactNode;
  handleSearch?: () => void;
  handleReset?: () => void;
  loading: boolean;
}

const SearchRow = ({
  // visible,
  children,
  handleSearch,
  handleReset,
  loading,
}: SearchRowProps) => {
    
  return (
    <Spin spinning={loading}>
      <FormContainer>
        <Row gutter={[16, 16]}>{children}</Row>
        <Row
          align="middle"
          justify="center"
          gutter={[16, 16]}
          style={{ marginTop: 10 }}
        >
          <Col span={12}>
            <Button size="large" type="primary" block onClick={handleSearch}>
              Rechercher
            </Button>
          </Col>
          <Col span={12}>
            <Button
              style={{ backgroundColor: "red", color: "white" }}
              size="large"
              block
              onClick={handleReset}
            >
              Réinitialiser
            </Button>
          </Col>
        </Row>
      </FormContainer>
    </Spin>
  );
};

export default SearchRow;
