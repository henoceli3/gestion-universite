import { Button, Col, ColorPicker, Row } from "antd";
import { colorsDef } from "../../config/Theme";
import { useState } from "react";

const ParamsChangeTheme = () => {
  const [primary, setPrimary] = useState<string>(colorsDef.primary);
  const [secondary, setSecondary] = useState<string>(colorsDef.secondary);
  const [tertiary, setTertiary] = useState<string>(colorsDef.tertiary);
  const [bgColor, setBgColor] = useState<string>(colorsDef.bgColor);
  const [alter, setAlter] = useState<string>(colorsDef.alter);

  function saveTheme() {
    localStorage.setItem("primary", primary);
    localStorage.setItem("secondary", secondary);
    localStorage.setItem("tertiary", tertiary);
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("alter", alter);
    window.location.reload();
  }
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <p style={{ fontWeight: "bold" }}>Modifiez les couleurs du thème</p>
        </Col>
        <Col span={12}>
          <ColorPicker
            defaultValue={primary}
            showText={(color) => (
              <span>Couleur primaire ({color.toHexString()})</span>
            )}
            onChange={(color) => {
              setPrimary(color.toHexString());
            }}
          />
        </Col>
        <Col span={12}>
          <ColorPicker
            defaultValue={secondary}
            showText={(color) => (
              <span>Couleur secondaire ({color.toHexString()})</span>
            )}
            onChange={(color) => {
              setSecondary(color.toHexString());
            }}
          />
        </Col>
        <Col span={12}>
          <ColorPicker
            defaultValue={alter}
            showText={(color) => <span>Alter ({color.toHexString()})</span>}
            onChange={(color) => {
              setAlter(color.toHexString());
            }}
          />
        </Col>
        <Col span={12}>
          <ColorPicker
            defaultValue={tertiary}
            showText={(color) => (
              <span>Couleur Tertiaire ({color.toHexString()})</span>
            )}
            onChange={(color) => {
              setTertiary(color.toHexString());
            }}
          />
        </Col>
        <Col span={12}>
          <ColorPicker
            defaultValue={bgColor}
            showText={(color) => (
              <span>Arrière-plan ({color.toHexString()})</span>
            )}
            onChange={(color) => {
              setBgColor(color.toHexString());
            }}
          />
        </Col>

        <Col span={24} style={{ textAlign: "center" }}>
          <Button type="primary" onClick={saveTheme}>
            Enregistrer
          </Button>
          <Button
            type="default"
            style={{ marginLeft: "1em" }}
            onClick={() => {}}
          >
            Annuler
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ParamsChangeTheme;
