import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(200, 200, 200);
  padding: 5px 10px;
  height: 35px;
  border: 2px solid black;
  border-radius: 8px;
  margin: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(130%);
  }
  svg {
    height: 25px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

export const Image = styled.div`
  width: 90%;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;

export const InputSelect = styled.input`
  background-color: rgb(255, 255, 255);
`;

export const ErrorPage = styled.p`
  position: fixed;
  margin: auto;
  inset: 50%;
  transform: translate(-50%);
  width: max-content;
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px 20px 10px 15px;
  background-color: rgb(0, 55, 150);
  position: sticky;
  top: 0;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const ItemComponent = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
  border: 2px solid rgb(0,0,0);
  border-radius: 8px;
  button {
    width: 70%;
    background-color: rgb(0,150,0);
    &:hover {
      filter: brightness(70%);
    };
    &:active {
      filter: brightness(130%);
    };
  }
  div.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    margin-bottom: 15px;
  }
`;

export const ItemsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  padding: 30px 15px;
`;