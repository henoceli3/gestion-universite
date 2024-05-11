import { Box } from "@chakra-ui/react";
import HeaderBar from "./HeaderBar";
import HeaderMenu from "./HeaderMenu";

const HeaderIndex = () => {
  return (
    <>
      <Box mb={"1.5em"}>
        <HeaderBar />
        <HeaderMenu />
      </Box>
    </>
  );
};

export default HeaderIndex;
