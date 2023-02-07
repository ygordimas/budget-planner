import { PriceHightlight, StyledTable } from "./styles";

export function TransactionsTable() {
  return (
    <>
      <StyledTable>
        <tbody>
          <tr>
            <td>Web Development</td>
            <td>
              <PriceHightlight variant="income">$ 12.000,00</PriceHightlight>
            </td>
            <td>Sale</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td>
              <PriceHightlight variant="expense">-$ 54,00</PriceHightlight>
            </td>
            <td>Purchase</td>
            <td>10/04/2022</td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
}
