import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  display: flex;
  justify-content: center;
`;

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  place-items: center;
  background: rgb(247, 156, 90);
  background: linear-gradient(
    50deg,
    rgba(247, 156, 90, 1) 0%,
    rgba(216, 90, 247, 1) 50%,
    rgba(107, 157, 255, 1) 100%
  );
  color: ${(props) => props.theme["gray-800"]};
  padding: 1rem;
  border-radius: 0.25rem;
  position: relative;

  span {
    font: 500 1rem Roboto Mono, monospace;
    z-index: 2;
  }

  .icon {
    margin-right: 1rem;
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    box-sizing: content-box;
    border-radius: 100%;
    border: 1rem solid ${(props) => props.theme["gray-800"]};
    z-index: 2;
  }

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    width: 96%;
    height: 90%;
    background-color: ${(props) => props.theme["gray-100"]};
    border-radius: inherit;
    transform: translate(2%, 5%);
  }
`;

export const TransactionButton = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["green-300"]};
  color: white;

  &:hover {
    background-color: ${(props) => props.theme["green-500"]};
    transition: 0.2s all;
  }
`;
