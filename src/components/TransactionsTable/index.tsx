import { useContext, useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import {
  DeleteAllButton,
  DeleteButton,
  PriceHightlight,
  StyledTable,
} from "./styles";

export function TransactionsTable() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });
  const filteredTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.filteredTransactions;
    }
  );
  const setFilteredTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.setFilteredTransactions;
    }
  );
  const isSearching = useContextSelector(TransactionsContext, (context) => {
    return context.isSearching;
  });

  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteTransaction;
    }
  );

  const deleteAllTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteAllTransactions;
    }
  );

  return (
    <>
      <StyledTable>
        <tbody>
          {isSearching
            ? filteredTransactions.map((transaction) => (
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
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              ))
            : transactions.map((transaction) => (
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
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <DeleteButton
                      onClick={() => deleteTransaction(transaction.id)}
                    >
                      Delete
                    </DeleteButton>
                  </td>
                </tr>
              ))}
        </tbody>
      </StyledTable>
      {transactions.length > 0 && (
        <DeleteAllButton onClick={() => deleteAllTransactions(transactions)}>
          Delete All
        </DeleteAllButton>
      )}
    </>
  );
}
