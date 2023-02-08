import { ArrowSquareDown, ArrowSquareUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { StyledContainer, SummaryCard } from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <>
      <StyledContainer>
        <SummaryCard variant="income">
          <header>
            <span>Income</span>
            <ArrowSquareUp size={32} weight="fill" className="icon" />
          </header>
          <p>{priceFormatter.format(summary.income)}</p>
        </SummaryCard>
        <SummaryCard variant="expense">
          <header>
            <span>Expenses</span>
            <ArrowSquareDown size={32} weight="fill" className="icon" />
          </header>
          <p>{priceFormatter.format(summary.expenses)}</p>
        </SummaryCard>
        <SummaryCard variant="total">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} weight="bold" className="icon" />
          </header>
          <p>{priceFormatter.format(summary.total)}</p>
        </SummaryCard>
      </StyledContainer>
    </>
  );
}
