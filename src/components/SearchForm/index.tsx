import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { StyledSearchForm } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { AxiosResponse } from "axios";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });
  const fetchTransactions: (query?: string) => Promise<void> =
    useContextSelector(TransactionsContext, (context) => {
      return context.fetchTransactions;
    });
  const filterTransactions: (query: string) => void = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.filterTransactions;
    }
  );
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const searchInput = watch("query");

  useEffect(() => {
    filterTransactions(searchInput);
  }, [searchInput]);

  return (
    <>
      {transactions.length > 0 && (
        <StyledSearchForm>
          <input
            type="text"
            placeholder="Search transaction(s) by description"
            {...register("query")}
          />
        </StyledSearchForm>
      )}
    </>
  );
}
