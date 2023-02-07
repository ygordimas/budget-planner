import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;
      color: ${(props) => props.theme["gray-100"]};
      background-color: ${(props) => props.theme["gray-900"]};
      border-radius: 6px;
      border: none;

      ::placeholder {
        color: ${(props) => props.theme["gray-100"]};
      }
    }

    button[type="submit"] {
      padding: 1rem;
      background-color: ${(props) => props.theme["green-500"]};
      border: none;
      border-radius: 6px;
      font-weight: 600;
      color: ${(props) => props.theme["gray-100"]};
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme["green-700"]};
        transition: 0.2s all;
      }
    }
  }
`;

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme["gray-100"]};
  line-height: 0; /* adjust focus outline to fit the icon inside */
`;
