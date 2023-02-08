import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHightlight, StyledTable } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <>
      <StyledTable>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHightlight variant={transaction.type}>
                  {transaction.type == "income"
                    ? `${priceFormatter.format(transaction.price)}`
                    : `- ${priceFormatter.format(transaction.price)}`}
                </PriceHightlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}
