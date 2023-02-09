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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "expense"]),
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
  });

  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createNewTransaction;
    }
  );

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, type, category, price } = data;

    createNewTransaction({
      description,
      category,
      price,
      type,
    });
    reset();
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Add New Transaction</Title>
          <Close>
            <X size={16} />
          </Close>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Description"
              required
              {...register("description")}
            />
            <input
              type="number"
              placeholder="Price"
              required
              {...register("price", { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Category"
              required
              {...register("category")}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={32} className="icon" />
                      Income
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="expense" value="expense">
                      <ArrowCircleDown size={32} className="icon" />
                      Expense
                    </TransactionTypeButton>
                  </TransactionType>
                );
              }}
            />

            <button type="submit">Submit</button>
          </form>
        </Content>
      </Dialog.Portal>
    </>
  );
}
