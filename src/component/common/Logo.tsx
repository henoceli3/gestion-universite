import { Text } from "@chakra-ui/react";

interface LogoProps {
  style?: React.CSSProperties;
  mdfontSize?: string;
}
const Logo = ({ style, mdfontSize }: LogoProps = {}) => {
  return (
    <>
      <Text
        fontSize={{ base: "1em", md: mdfontSize || "2em" }}
        style={style}
      >
        Gestion
      </Text>
    </>
  );
};

export default Logo;
