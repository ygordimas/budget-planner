import styled from "styled-components";

export const StyledSearchForm = styled.form`
  display: flex;
  gap: 1rem;

  > * {
    padding: 1rem;
    border-radius: 6px;
  }

  input {
    flex: 1;

    border: none;
    background-color: ${(props) => props.theme["gray-700"]};

    ::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    place-items: center;
    gap: 0.2rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["green-300"]};
      color: ${(props) => props.theme["gray-100"]};
      transition: 0.2s all;
    }
  }
`;
