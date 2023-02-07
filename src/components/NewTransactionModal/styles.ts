import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

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
  cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "expense";
}

// prettier-ignore
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 0.2rem;

  cursor: pointer;
  color: ${(props) => props.theme["gray-100"]};
  flex: 1;
  padding-block: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-700"]};
  border: 0;
  /* border: 1px solid
    ${(props) =>
      props.variant == "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]}; */

  .icon {
    color: ${(props) =>
      props.variant == "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${props => props.theme["gray-600"]};
  }

  &[data-state="checked"] {
    
    background-color: ${props => props.variant == 'income' ? props.theme["green-500"] : props.theme["red-500"]};

    .icon {
        color: ${props => props.theme["gray-100"]};
    }
  }
`;
