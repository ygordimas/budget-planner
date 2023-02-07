import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Close, Content, Overlay, Title } from "./styles";

export function NewTransactionModal() {
  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Add New Transaction</Title>
          <Close>
            <X size={16} />
          </Close>
          <form action="">
            <input type="text" placeholder="Description" required />
            <input type="number" placeholder="Price" required />
            <input type="text" placeholder="Category" required />

            <button type="submit">Submit</button>
          </form>
        </Content>
      </Dialog.Portal>
    </>
  );
}
