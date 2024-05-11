import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Input, Row, Space } from "antd";
import { useState } from "react";
import NotificationSucces from "./NotificationSucces";

const ParamsChangeMaxCartes = () => {
  const [maxCartes, setMaxCartes] = useState(localStorage.getItem("maxCartes"));
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <p style={{ fontWeight: "bold" }}>
            Modifiez le nombre maximum de cartes
          </p>
        </Col>
        <Col span={24}>
          <Space.Compact style={{ width: "50%", marginTop: "1em" }}>
            <Input
              placeholder="Saisissez le nombre maximal de cartes"
              type="number"
              value={maxCartes ?? ""}
              onChange={(e) => {
                setMaxCartes(e.target.value);
              }}
            />
            <Button
              type="primary"
              icon={<FontAwesomeIcon icon={faCheck} />}
              onClick={() => {
                localStorage.setItem("maxCartes", maxCartes ?? "0");
                NotificationSucces(
                  "Le nombre maximal de cartes a bien été mis à jour"
                );
              }}
            />
          </Space.Compact>
        </Col>
      </Row>
    </>
  );
};

export default ParamsChangeMaxCartes;
