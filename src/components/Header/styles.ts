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
`;

export const Logo = styled.div`
  .icon {
    color: red;
  }
`;

export const TransactionButton = styled.button``;
