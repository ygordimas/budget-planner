import { Wallet } from "phosphor-react";
import {
  Logo,
  StyledContainer,
  StyledHeader,
  TransactionButton,
} from "./styles";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <StyledContainer>
      <StyledHeader>
        <Logo>
          <Wallet size={32} className="icon" />
          <span>Budger Planner</span>
        </Logo>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TransactionButton>New Transaction</TransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </StyledHeader>
    </StyledContainer>
  );
}
