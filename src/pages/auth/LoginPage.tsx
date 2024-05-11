import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomButtom from "../../component/common/CustomButton";
import { Input, Spin } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Endpoints } from "../../config/Endoinpt";
import NotificationSucces from "../../component/common/NotificationSucces";
import NotificationError from "../../component/common/NotificationError";
import { colorsDef } from "../../config/Theme";

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [login_user, setLoginUser] = useState<string>("");
  const [password_user, setPasswordUser] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("tokenBo")) {
      navigate("/tableau-de-bord", { replace: true });
    }
  }, [navigate]);

  async function Login() {
    try {
      setLoading(true);
      const res = await axios.post(
        `${Endpoints.baseUrl}${Endpoints.login}`,
        {
          login_user,
          password_user,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.status === "success") {
        localStorage.setItem("tokenBo", res.data.accessToken);
        localStorage.setItem("userBo", JSON.stringify(res.data.result));
        NotificationSucces("Connexion reussie", "Bienvenue sur FyleEvent");
        navigate("/tableau-de-bord", { replace: true });
      } else {
        NotificationError("Connexion echoue", res.data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      NotificationError("Connexion echoue", "Verifier votre connexion");
      console.log(error);
    }
  }
  return (
    <>
      {/* grand container  */}
      <Center h="100vh" w="100vw">
        <Flex
          w={"50%"}
          h={"100%"}
          display={{ base: "none", lg: "flex" }}
          bg={colorsDef.primary}
        ></Flex>
        {/* deuxième sous conteneur avec le formulaire de connexion  */}
        <Center
          flexDirection={"column"}
          justifyContent={"space-around"}
          w={{ base: "100%", lg: "50%" }}
          h={"100%"}
          bg={colorsDef.bgColor}
        >
          <Text
            color={theme.colors.primary}
            className="great-vibes-regular"
            textAlign={"center"}
            fontSize={"2.5em"}
            marginBottom={0}
            // marginTop={"1em"}
          >
            Connectez-vous
          </Text>
          <Box w={"80%"}>
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
                label={"Connexion"}
                callback={() => {
                  Login();
                }}
                style={{ marginTop: "1em", width: "100%" }}
              />
            )}
          </Box>
          <Box></Box>
        </Center>
      </Center>
    </>
  );
};

export default LoginPage;
