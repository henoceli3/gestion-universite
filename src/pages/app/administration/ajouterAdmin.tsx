import { Button, Col, Input, Row, Select, Space, Spin } from "antd";
import PageLabel from "../../../component/common/PageLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { AdminMembersInterface } from "../../../config/Interfaces";
import { useState } from "react";
import { Endpoints } from "../../../config/Endoinpt";
import NotificationSucces from "../../../component/common/NotificationSucces";
import NotificationError from "../../../component/common/NotificationError";
import axios from "axios";

const AjouterAdmin = () => {
  const navigate = useNavigate();
  const [islargerThan768] = useMediaQuery("(min-width: 768px)");
  const [admin, setAdmin] = useState<AdminMembersInterface>(
    {} as AdminMembersInterface
  );
  const [loading, setLoading] = useState(false);

  async function ajouterAdmin() {
    try {
      setLoading(true);
      const res = await axios.post(
        `${Endpoints.baseUrl}${Endpoints.admin.create}`,
        {
          administrateur: admin,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        NotificationSucces("Ajout reussi");
        navigate("/administration");
      } else {
        NotificationError(res.data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      NotificationError("Une erreur est survenue");
      console.log(error);
    }
  }
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <PageLabel label="Ajouter Administration" />
            <Button
              type="primary"
              icon={
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={() => navigate(-1)}
                />
              }
            >
              Retour
            </Button>
          </Space>
        </Col>
        <Col span={islargerThan768 ? 8 : 24}>
          <Input
            placeholder="Nom"
            value={admin.nom}
            onChange={(e) => setAdmin({ ...admin, nom: e.target.value })}
          />
        </Col>
        <Col span={islargerThan768 ? 8 : 24}>
          <Input
            placeholder="Prenoms"
            value={admin.prenoms}
            onChange={(e) => setAdmin({ ...admin, prenoms: e.target.value })}
          />
        </Col>
        <Col span={islargerThan768 ? 8 : 24}>
          <Input
            placeholder="Email"
            value={admin.email}
            onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
          />
        </Col>
        <Col span={islargerThan768 ? 8 : 24}>
          <Input
            type="number"
            placeholder="Numero Telephone"
            value={admin.numero ? admin.numero : ""}
            onChange={(e) => setAdmin({ ...admin, numero: e.target.value })}
          />
        </Col>
        <Col span={islargerThan768 ? 8 : 24}>
          <Select
            options={[
              { value: "Educateur", label: "Educateur" },
              { value: "Comptable", label: "Comptable" },
            ]}
            placeholder="Role"
            value={admin.role ? admin.role : undefined}
            style={{ width: "100%" }}
            onChange={(e) => setAdmin({ ...admin, role: e })}
          />
        </Col>
        <Col span={islargerThan768 ? 8 : 24}>
          <Input
            placeholder="Mot de passe"
            value={admin.motdepasse}
            onChange={(e) => setAdmin({ ...admin, motdepasse: e.target.value })}
          />
        </Col>

        <Col span={24} style={{ textAlign: "center" }}>
          {loading ? (
            <Spin />
          ) : (
            <Button
              type="primary"
              onClick={() => {
                if (!admin.nom || !admin || !admin || !admin.motdepasse) {
                  NotificationError("Veuillez remplir tous les champs");
                  return;
                }
                ajouterAdmin();
              }}
            >
              Ajouter
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};

export default AjouterAdmin;
