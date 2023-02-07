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

interface PriceHightlightProps {
  variant: "income" | "expense";
}

export const PriceHightlight = styled.span<PriceHightlightProps>`
  color: ${(props) =>
    props.variant == "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
