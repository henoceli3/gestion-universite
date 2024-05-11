import styled from "styled-components";
import SimpleBar from "simplebar-react";
import { NavLink } from "react-router-dom";
import { colorsDef } from "../../config/Theme";

export const MenuCardContainer = styled(NavLink)`
  transition: all 0.3s ease-in-out;
  background: ${colorsDef.tertiary};
  height: 5.5rem;
  min-width: 100px;
  max-width: 110px;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 15px;
  text-align: center;
  padding: 3px;
  font-family: "Oswald", sans-serif;
  backdrop-filter: blur(10px);
  text-decoration: none;
  color: #000;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.colors.primary};
    /* filter: ${({ theme }) =>
      `drop-shadow(0 0px 3px ${theme.colors.alter})`}; */

    & > span {
      color: #ffffff;
    }
  }

  &:active {
    transform: scale(0.9);
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    & > span {
      color: #ffffff;
    }
  }

  & > span {
    text-overflow: ellipsis;
    margin-top: 0.2rem;
    line-height: 16px;
  }
`;

export const StandarNavItemContainer = styled(NavLink)`
  color: ${colorsDef.secondary};
  &:hover {
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid ${colorsDef.tertiary};
  }
  &.active {
    border-bottom: 3px solid ${colorsDef.tertiary};
  }
`;

export const TopBarContainer = styled.div`
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1rem;
  /* background-color: #ff000020; */
  background-color: #ffffff;
`;

export const MenuBarInnerContainer = styled.div`
  padding-left: 2rem;
  display: flex;
  height: 6.5rem;
  align-items: center;
  padding-right: 2rem;
  overflowx: scroll;
`;
export const MenuBarContainer = styled(SimpleBar)``;

export const TopbarWrapper = styled.div`
  z-index: 5000;
  position: fixed;
  flex-direction: column;
  align-items: stretch;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 10rem;
  background-color: #ffffff70;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0px -30px 15px #00000010;
  filter: ${({ theme }) => `drop-shadow(0 0 1em ${theme.colors.alter}50)`};
`;
