import { ArrowSquareDown, ArrowSquareUp, CurrencyDollar } from "phosphor-react";
import { StyledContainer, SummaryCard } from "./styles";

export function Summary() {
  return (
    <>
      <StyledContainer>
        <SummaryCard variant="income">
          <header>
            <span>Income</span>
            <ArrowSquareUp size={32} weight="fill" className="icon" />
          </header>
          <p>17.400,00</p>
        </SummaryCard>
        <SummaryCard variant="expense">
          <header>
            <span>Expenses</span>
            <ArrowSquareDown size={32} weight="fill" className="icon" />
          </header>
          <p>1.259,00</p>
        </SummaryCard>
        <SummaryCard variant="total">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} weight="bold" className="icon" />
          </header>
          <p>16.141,00</p>
        </SummaryCard>
      </StyledContainer>
    </>
  );
}
