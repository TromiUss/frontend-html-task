import styled from "styled-components";

export const SidebarContainer = styled.div<{ $isOpened: boolean }>`
  background-color: var(--color-sidebar-background-light-default);
  color: var(--color-text-light-default);
  width: ${(props) => (props.$isOpened ? "200px" : "70px")};
  height: 600px;
  padding: 10px 0;
  border: groove 1px gray;
  border-radius: 20px;
  transition: width 0.5s ease;

  & > div {
    margin: 10px 20px;
  }


  .sidebar__title {
    opacity: ${(props) => (props.$isOpened ? 1 : 0)};
    visibility: ${(props) => (props.$isOpened ? "visible" : "hidden")};
    transition: all 0.3s ease;
    margin-left: ${(props) => (props.$isOpened ? "10px" : "0")};
  }

  & > div:first-child img {
    width: 50px;
  }

  & > div:first-child {
    width: 170px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  & > div:first-child div {
    margin-left: auto;
    cursor: pointer;
  }

  & > div:nth-child(2) {
    margin-top: 30px;
  }

  & > div:nth-child(2) > div {
    margin: ${(props) => (props.$isOpened ? "20px 0" : "0")};
  }

  & > div:last-child {
    margin-top: 100%;
  }

  & > div:last-child > div {
    margin: 20px 0;
  }
`;
