import styled from "styled-components";

export const SidebarContainer = styled.div<{ $isOpened: boolean }>`
  background-color: var(--color-sidebar-background-light-default);
  color: var(--color-text-light-default);
  width: ${(props) => (props.$isOpened ? "200px" : "70px")};
  height: 600px;
  padding: 10px 0;
  border: groove 1px gray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.5s ease;

  & > div {
    flex-shrink: 0;
    margin-left: ${(props) => (props.$isOpened ? '30px' : '0')};
  }

  .sidebar__title {
    opacity: ${(props) => (props.$isOpened ? 1 : 0)};
    visibility: ${(props) => (props.$isOpened ? "visible" : "hidden")};
    margin-left: ${(props) => (props.$isOpened ? "10px" : "0")};
    transition: 
      opacity ${props => props.$isOpened ? '1.5s' : '0.2s'} ease,
      visibility ${props => props.$isOpened ? '1.5s' : '0.2s'} ease,
      margin-left ${props => props.$isOpened ? '1.5s' : '0.4s'} ease;
    position: ${(props) => (props.$isOpened ? "static" : "absolute")};
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$isOpened ? "space-between" : "center")};
    position: relative;
    height: 50px;
    transition: all 0.5s ease;
  }

  & > div:first-child {
    margin-left: ${(props) => (props.$isOpened ? "20px" : "0")};
  }

  & > div:first-child img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  & > div:first-child > div {
    position: ${(props) => (props.$isOpened ? "static" : "absolute")};
    right: ${(props) => (props.$isOpened ? "10px" : "-10px")};
    top: 10px;
    cursor: pointer;
    z-index: 10;
    transition: 
      right 0.4s ease,
      opacity 0.4s ease,
      transform 0.4s ease;
  }

  & > div:nth-child(2) {
    margin-top: 30px;
    margin-left: ${(props) => (props.$isOpened ? "30px" : "10px")};
    display: flex;
    width: ${(props) => (props.$isOpened ? "auto" : "50px")};
    flex-direction: column;
    align-items: ${(props) => (props.$isOpened ? "flex-start" : "center")};
    transition: margin 0.4s ease;
  }

  & > div:nth-child(2) > div {
    margin: ${(props) => (props.$isOpened ? "10px 0" : "10px 0")};
    text-align: center;
    transition: margin 0.4s ease;
  }

  & > div:last-child {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.$isOpened ? "flex-start" : "center")};
  }

  & > div:last-child > div {
    margin: 20px 0;
    text-align: center;
    transition: margin 0.4s ease;
  }
`;