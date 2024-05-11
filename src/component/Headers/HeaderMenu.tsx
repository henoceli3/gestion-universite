// import { useTheme } from "styled-components";
import { MenuCardContainer } from "../StyledComponents/Header.componentStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "@chakra-ui/react";
import { topMenuRoutes } from "../../router/TopMenuRoutes";

const HeaderMenu = () => {

  const renderMenus = () => {
    return topMenuRoutes.map((item, idx) => (
      <MenuCardContainer to={item.path} key={idx}>
        <FontAwesomeIcon icon={item.icon} size="2x" color={"white"} />
        <span>{item.label}</span>
      </MenuCardContainer>
    ));
  };
  return (
    <Flex
      overflowX={"auto"}
      mt={"1rem"}
      pl={"1rem"}
      pb={"1rem"}
      className="header-menu-container"
    >
      {renderMenus()}
    </Flex>
  );
};

export default HeaderMenu;
