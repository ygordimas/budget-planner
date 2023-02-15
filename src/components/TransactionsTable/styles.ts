import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.5rem 2rem;
    background-color: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const DeleteButton = styled.button`
  padding: 0.4rem;
  border-radius: 0.4rem;
  background-color: transparent;
  color: ${(props) => props.theme["gray-500"]};
  border-color: ${(props) => props.theme["gray-500"]};
  border-style: solid;

  &:hover {
    background-color: ${(props) => props.theme["red-300"]};
    color: ${(props) => props.theme["gray-900"]};
    border-color: transparent;
    transition: all 0.2s;
  }
`;

export const DeleteAllButton = styled.button`
  padding: 0.8rem;
  margin: 1rem 0;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme["red-500"]};
  border-color: transparent;
  border-style: solid;
  color: ${(props) => props.theme["gray-100"]};

  &:hover {
    background-color: ${(props) => props.theme["red-300"]};
    color: ${(props) => props.theme["gray-900"]};
    transition: all 0.2s;
  }
`;

interface PriceHightlightProps {
  variant: "income" | "expense";
}

export const PriceHightlight = styled.span<PriceHightlightProps>`
  color: ${(props) =>
    props.variant == "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
