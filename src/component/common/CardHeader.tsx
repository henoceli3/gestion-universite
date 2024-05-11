import styled from "styled-components";

export const Header = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  text-transform: uppercase;
`;

const CardHeader = ({ label }: { label: string }) => {
  return <Header>{label}</Header>;
};

export default CardHeader;
