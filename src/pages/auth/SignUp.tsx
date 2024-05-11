import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomButtom from "../../component/common/CustomButton";
import { useState } from "react";
import { Input, Spin } from "antd";
import axios from "axios";
import { Endpoints } from "../../config/Endoinpt";
import { colorsDef } from "../../config/Theme";
import NotificationSucces from "../../component/common/NotificationSucces";
import NotificationError from "../../component/common/NotificationError";

const SingUpPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [nom_user, setNomUser] = useState<string>("");
  const [prenom_user, setPrenomUser] = useState<string>("");
  const [login_user, setLoginUser] = useState<string>("");
  const [password_user, setPasswordUser] = useState<string>("");

  async function createUser() {
    try {
      setLoading(true);
      const res = await axios.post(
        `${Endpoints.baseUrl}${Endpoints.createUser}`,
        {
          nom_user,
          prenom_user,
          login_user,
          password_user,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.statut === "succes") {
        NotificationSucces(`Bienvenue ${nom_user} !`);
        navigate("/admin");
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
      {/* grand container  */}
      <Center h="100vh" w="100vw" bg={colorsDef.bgColor}>
        <Flex w={"50%"} h={"100%"} bg={colorsDef.primary}></Flex>
        {/* sous container avec le formulaire d'enregistrement  */}
        <Center
          flexDirection={"column"}
          justifyContent={"space-around"}
          w={"50%"}
          h={"100%"}
          pt={4}
          pb={4}
        >
          <Text
            color={theme.colors.primary}
            className="great-vibes-regular"
            textAlign={"center"}
            fontSize={"2.5em"}
            marginBottom={0}
          >
            Créer votre compte
          </Text>
          <Box w={"80%"}>
            <Input
              onChange={(e) => {
                setNomUser(e.target.value);
              }}
              value={nom_user}
              placeholder={"Nom"}
              className="login-Input"
              width={"100%"}
              style={{
                background: "transparent",
                marginBottom: "1em",
                height: "3em",
                borderColor: theme.colors.primary,
              }}
            />
            <Input
              onChange={(e) => {
                setPrenomUser(e.target.value);
              }}
              value={prenom_user}
              placeholder={"Prenom"}
              className="login-Input"
              width={"100%"}
              style={{
                background: "transparent",
                marginBottom: "1em",
                height: "3em",
                borderColor: theme.colors.primary,
              }}
            />
            <Input
              onChange={(e) => {
                setLoginUser(e.target.value);
              }}
              value={login_user}
              placeholder={"Login"}
              className="login-Input"
              width={"100%"}
              style={{
                background: "transparent",
                marginBottom: "1em",
                height: "3em",
                borderColor: theme.colors.primary,
              }}
            />
            <Input.Password
              onChange={(e) => {
                setPasswordUser(e.target.value);
              }}
              value={password_user}
              placeholder={"Mot de passe"}
              className="login-Input"
              width={"100%"}
              style={{
                background: "transparent",
                marginBottom: "1em",
                height: "3em",
                borderColor: theme.colors.primary,
              }}
            />

            {loading ? (
              <Center>
                <Spin />
              </Center>
            ) : (
              <CustomButtom
                label={"Créer"}
                callback={() => {
                  createUser();
                }}
                style={{ marginTop: "1em", width: "100%" }}
              />
            )}
            <p
              style={{
                textAlign: "center",
                marginTop: "1em",
                fontSize: "0.8em",
              }}
            >
              Vous avez un compte ?
              <span
                style={{ color: theme.colors.primary, cursor: "pointer" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                connectez-vous ici
              </span>
            </p>
          </Box>
          <Box></Box>
        </Center>
      </Center>
    </>
  );
};

export default SingUpPage;
