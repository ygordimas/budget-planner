import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { StyledContainer } from "./styles";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <>
      <Header />
      <Summary />
      <StyledContainer>
        <SearchForm />
        <TransactionsTable />
      </StyledContainer>
    </>
  );
}
