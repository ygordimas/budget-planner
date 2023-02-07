import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { StyledContainer } from "./styles";

export function Transactions() {
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
