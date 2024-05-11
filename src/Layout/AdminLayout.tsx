import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatButton, Tooltip } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";
import HeaderIndex from "../component/Headers/HeaderIndex";
import { useEffect } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("tokenBo")) {
      // navigate("/login", { replace: true });
    }
  }, [navigate]);
  return (
    <Box>
      <HeaderIndex />
      <Center w={"100%"}>
        <Box w={"90%"} h={"90%"}>
          <Outlet />
        </Box>
      </Center>
      <FloatButton.Group shape="square" style={{ right: 25 }}>
        <Tooltip title="Déconnexion" placement="left">
          <FloatButton
            type="primary"
            icon={<FontAwesomeIcon icon={faSignOut} />}
            onClick={() => {
              localStorage.clear();
              navigate("/admin/login", { replace: true });
            }}
          />
        </Tooltip>
      </FloatButton.Group>
    </Box>
  );
};

export default AdminLayout;
