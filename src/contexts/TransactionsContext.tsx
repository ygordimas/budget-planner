import { AxiosResponse } from "axios";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: "string";
  type: "income" | "expense";
  category: "string";
  price: number;
  createdAt: "string";
}

interface CreateNewTransactionProps {
  description: string;
  type: "income" | "expense";
  category: string;
  price: number;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: () => Promise<void>;
  createNewTransaction: (data: CreateNewTransactionProps) => Promise<void>;
  filteredTransactions: Transaction[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  filterTransactions: (query: string) => void;
  isSearching: boolean;
  deleteTransaction: (id: number) => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  // prettier-ignore
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const fetchTransactions = useCallback(
    async (query?: string): Promise<void> => {
      const response = await api.get("/transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",

          q: query,
        },
      });

      setTransactions(response.data);
    },
    []
  );

  const createNewTransaction = useCallback(
    async (data: CreateNewTransactionProps) => {
      const { description, type, category, price } = data;
      const response = await api.post("/transactions", {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      });

      setTransactions((state) => [response.data, ...state]);
    },
    []
  );

  const deleteTransaction = useCallback(async (id: number) => {
    await api.delete(`/transactions/${id}`);

    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }, []);

  const filterTransactions = (query: string) => {
    query ? setIsSearching(true) : setIsSearching(false);
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredTransactions([...filtered]);
  };

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        filteredTransactions,
        filterTransactions,
        fetchTransactions,
        createNewTransaction,
        setFilteredTransactions,
        isSearching,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
