import styled, { css } from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;

  margin: -2rem auto 0;
  gap: 4rem;
`;

interface SummaryCardProps {
  variant?: "income" | "expense" | "total";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props) => props.theme["gray-500"]};
  padding: 2rem 3rem;
  border-radius: 6px;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ${(props) =>
    props.variant == "income" &&
    css`
      background-color: ${(props) => props.theme["cyan-300"]};

      .icon {
        color: ${(props) => props.theme["green-300"]};
      }
    `}

  ${(props) =>
    props.variant == "expense" &&
    css`
      background-color: ${(props) => props.theme["orange-300"]};
    `}

    ${(props) =>
    props.variant == "total" &&
    css`
      background-color: ${(props) => props.theme["magenta-300"]};
    `}
`;
