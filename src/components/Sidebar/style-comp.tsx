import styled from "styled-components";

export const SidebarContainer = styled.div<{
  $isOpened: boolean;
  $theme: "light" | "dark";
}>`
  background-color: var(
    --color-sidebar-background-${(props) => props.$theme}-default
  );
  color: var(--color-text-${(props) => props.$theme}-default);
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
    margin-left: ${(props) => (props.$isOpened ? "25px" : "0")};
    transition: margin-left 0.5s ease;
  }

  .sidebar__title {
    opacity: ${(props) => (props.$isOpened ? 1 : 0)};
    visibility: ${(props) => (props.$isOpened ? "visible" : "hidden")};
    margin-left: ${(props) => (props.$isOpened ? "10px" : "0")};
    transition: opacity ${(props) => (props.$isOpened ? "1.0s" : "0.2s")} ease,
      visibility ${(props) => (props.$isOpened ? "1.0s" : "0.2s")} ease,
      margin-left ${(props) => (props.$isOpened ? "1.0s" : "0.4s")} ease;
    position: ${(props) => (props.$isOpened ? "absolute" : "absolute")};
  }

  & > div:first-child .sidebar__title {
    left: 30px;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$isOpened ? "space-between" : "left")};
    margin-left: ${(props) => (props.$isOpened ? "20px" : "20px")};
    position: relative;
    height: 50px;
    transition: all 0.5s ease;
  }

  & > div:first-child img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  & > div:first-child > div {
    position: ${(props) => (props.$isOpened ? "static" : "absolute")};
    right: ${(props) => (props.$isOpened ? "10px" : "-30px")};
    top: 10px;
    cursor: pointer;
    z-index: 10;
    transition: right 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
    width: 20px;
    text-align: center;
  }

  & > div:not(:first-child) {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    transition: margin 0.4s ease;
  }

  & > div:not(:first-child) > div {
    margin: ${(props) => (props.$isOpened ? "10px 0" : "10px 25px")};
    transition: margin 0.4s ease;
  }

  & > div:last-child {
    margin-top: auto;
  }

  & > div > div:hover {
    background-color: var(--color-button-background-${(props) => props.$theme}-hover);
    color: var(--color-text-${(props) => props.$theme}-hover);
  }

  & > div > div:active,
  & > div > div:focus {
    color: var(--color-text-${(props) => props.$theme}-active);
    font-weight: bold;
  }

  button {
    margin: 0 auto;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
  }
`;
