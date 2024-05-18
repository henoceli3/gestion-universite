import { Center, useMediaQuery } from "@chakra-ui/react";
import { Button, Col, Input, Row, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { Endpoints } from "../../config/Endoinpt";
import NotificationError from "../../component/common/NotificationError";
import NotificationSucces from "../../component/common/NotificationSucces";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigator = useNavigate();
  const [spinning, setSpinning] = useState<boolean>(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [urlLogin, setUrlLogin] = useState<string>("");
  const [logInformations, setLogInformations] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigator("/", { replace: true });
    }
  }, [navigator]);
  async function loginUser() {
    try {
      setSpinning(true);
      const res = await axios.post(
        `${Endpoints.baseUrl}${urlLogin}`,
        {
          email: logInformations.email,
          password: logInformations.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        NotificationSucces(`Bienvenue ${logInformations.email} !`);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("userBo", JSON.stringify(res.data.data.user));
        localStorage.setItem("role", JSON.stringify(res.data.data.role));
        navigator("/administration");
      } else {
        NotificationError(res.data.response.message);
      }
      setSpinning(false);
    } catch (error) {
      setSpinning(false);
      NotificationError("Une erreur est survenue");
      console.log(error);
    }
  }
  return (
    <>
      <Center width={"100vw"} height={"100vh"}>
        <Row
          gutter={[16, 16]}
          style={{ width: isLargerThan768 ? "50%" : "100%" }}
        >
          <Col span={24}>
            <Select
              placeholder="Selectionnez votre profil"
              options={[
                { value: 1, label: "Etudiant" },
                { value: 2, label: "Enseignant" },
                { value: 3, label: "Membre de l'administration" },
              ]}
              onChange={(value) => {
                switch (value) {
                  case 1:
                    setUrlLogin(Endpoints.login.etudiantLogin);
                    break;
                  case 2:
                    setUrlLogin(Endpoints.login.enseignantLogin);
                    break;
                  case 3:
                    setUrlLogin(Endpoints.login.adminLogin);
                    break;
                }
              }}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="Saisissez votre email"
              value={logInformations.email}
              onChange={(e) =>
                setLogInformations({
                  ...logInformations,
                  email: e.target.value,
                })
              }
            />
          </Col>
          <Col span={24}>
            <Input.Password
              type="password"
              placeholder="Saisissez votre mot de passe"
              value={logInformations.password}
              onChange={(e) =>
                setLogInformations({
                  ...logInformations,
                  password: e.target.value,
                })
              }
            />
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            {spinning ? (
              <Spin />
            ) : (
              <Button type="primary" onClick={loginUser}>
                Connexion
              </Button>
            )}
          </Col>
        </Row>
      </Center>
    </>
  );
};

export default LoginPage;
