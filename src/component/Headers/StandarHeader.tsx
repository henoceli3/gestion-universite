import { Center, Flex, HStack, useMediaQuery } from "@chakra-ui/react";
import { colorsDef } from "../../config/Theme";
import Logo from "../common/Logo";
import { StansarMenuRoutes } from "../../router/StandarMenuRoutes";
import { useNavigate } from "react-router-dom";
import { StandarNavItemContainer } from "../StyledComponents/Header.componentStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Drawer } from "antd";

const StandarHeader = () => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const renderNavItems = () => {
    return StansarMenuRoutes.map((item, idx) => (
      <StandarNavItemContainer to={item.path} key={idx}>
        <FontAwesomeIcon
          icon={item.icon}
          color={colorsDef.secondary}
          style={{ marginRight: "0.5em" }}
        />
        <span>{item.label}</span>
      </StandarNavItemContainer>
    ));
  };
  return (
    <>
      <Flex
        w={"100%"}
        h={"4em"}
        bg={colorsDef.primary}
        justifyContent={"space-between"}
      >
        <Center ml={"1em"} cursor={"pointer"} onClick={() => navigate("/")}>
          <Logo style={{ color: colorsDef.secondary }} mdfontSize="1.5em" />
        </Center>
        {isLargerThan768 ? (
          <HStack mr={"1em"} spacing={"1em"}>
            {renderNavItems()}
          </HStack>
        ) : (
          <Center>
            <FontAwesomeIcon
              icon={faBars}
              color={colorsDef.secondary}
              size="lg"
              onClick={() => setShowDrawer(!showDrawer)}
            />
          </Center>
        )}
      </Flex>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}></Drawer>
    </>
  );
};

export default StandarHeader;
