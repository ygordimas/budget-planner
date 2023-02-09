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

  background-color: ${(props) => props.theme["gray-300"]};
  padding: 3rem 3rem;
  border-radius: 6px;
  color: white;
  overflow: hidden;
  position: relative;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    span {
      font-weight: 700;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;

      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      color: ${(props) => props.theme["gray-100"]};
      z-index: 2;
    }

    .icon {
      padding: 0.5rem;
      box-sizing: content-box;
      background-color: ${(props) => props.theme["gray-300"]};
      border-radius: 9999px;
      z-index: 2;
    }

    &::before {
      content: "";
      top: 0;
      left: -50%;
      width: 200%;
      height: 80%;
      position: absolute;
      background-color: ${(props) => props.theme["gray-400"]};
      transform: translateY(10%);
    }
  }

  &::after {
    content: "";
    inset: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme["gray-100"]};
    box-sizing: border-box;
    border-radius: 6px;
  }

  p {
    width: min-content;
    margin-top: 0.2rem;
    font: 700 1.5rem Roboto Mono, monospace;
    padding-inline: 0.25rem;

    ${(props) =>
      props.variant == "income" &&
      css`
        background-color: ${(props) => props.theme["green-300"]};
      `}

    ${(props) =>
      props.variant == "expense" &&
      css`
        background-color: ${(props) => props.theme["red-300"]};
      `}

    ${(props) =>
      props.variant == "total" &&
      css`
        color: ${(props) => props.theme["gray-800"]};
        background-color: white;
      `}
  }

  ${(props) =>
    props.variant == "income" &&
    css`
      .icon {
        color: ${(props) => props.theme["green-300"]};
      }
    `}

  ${(props) =>
    props.variant == "expense" &&
    css`
      .icon {
        color: ${(props) => props.theme["red-300"]};
      }
    `}

    ${(props) =>
    props.variant == "total" &&
    css`
      background-color: ${(props) => props.theme["gray-300"]};

      .icon {
        color: ${(props) => props.theme["gray-900"]};
      }
    `}
`;
