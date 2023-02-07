import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  Close,
  Content,
  Overlay,
  Title,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

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

            <TransactionType>
              <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={32} className="icon" />
                Income
              </TransactionTypeButton>
              <TransactionTypeButton variant="expense" value="outcome">
                <ArrowCircleDown size={32} className="icon" />
                Expense
              </TransactionTypeButton>
            </TransactionType>
            <button type="submit">Submit</button>
          </form>
        </Content>
      </Dialog.Portal>
    </>
  );
}
