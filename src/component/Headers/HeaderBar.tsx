import { Col, Row } from "antd";
import Logo from "../common/Logo";
import { useTheme } from "styled-components";
import { Box, Center, useMediaQuery } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect,  } from "react";
import { colorsDef } from "../../config/Theme";
import { useNavigate } from "react-router-dom";
// import { getRole } from "../../config/helper";
// import { getUser } from "../../config/helper";

const HeaderBar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const theme = useTheme();
  // const [role, setRole] = useState<string>("");

  useEffect(() => {
    // setUser(getUser());
    // setRole(getRole());
  }, []);

  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{
          width: "100%",
          height: "5em",
          backgroundColor: theme.colors.primary,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: isLargerThan768 ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1em",
          }}
          span={isLargerThan768 ? 16 : 24}
        >
          <Col
            style={{
              marginLeft: isLargerThan768 ? "1em" : "0em",
              cursor: "pointer",
            }}
            onClick={() => navigate("/admin")}
          >
            <Logo style={{ color: "white" }} mdfontSize="1.5em" />
          </Col>
        </Col>

        {isLargerThan768 && (
          <Col
            style={{
              height: "100%",
              marginRight: "1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // color: theme.colors.secondary,
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => navigate("/profile")}
          >
            <Box textAlign={"end"}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5em",
                  textTransform: "capitalize",
                }}
              >
                {/* {`${user?.nom_user} ${user?.prenom_user}`} */}
              </p>
              {/* <p>{role}</p> */}
            </Box>
            <Center
              ml={"1em"}
              w={"4em"}
              h={"80%"}
              bg={colorsDef.tertiary}
              borderRadius={"50%"}
            >
              <FontAwesomeIcon icon={faUser} fontSize={"1.5em"} />
            </Center>
          </Col>
        )}
      </Row>
    </>
  );
};

export default HeaderBar;
