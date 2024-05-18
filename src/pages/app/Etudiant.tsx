import { Button, Col, Row, Space, Table } from "antd";
import PageLabel from "../../component/common/PageLabel";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../component/common/TableContainer";

const Etudiant = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <PageLabel label="Etudiants" />
            <Button
              type="primary"
              icon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => navigate("/administration/ajouter-administration")}
            >
              Ajouter
            </Button>
          </Space>
        </Col>
        <Col span={24}>
          <TableContainer children={<Table />} />
        </Col>
      </Row>
    </>
  );
};

export default Etudiant;
