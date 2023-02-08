export const dateFormatter = new Intl.DateTimeFormat("en-US");

export const priceFormatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});
