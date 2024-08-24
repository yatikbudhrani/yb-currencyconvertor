import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_nlCiKP8evfxWSdxtvKBQgh5jhj2gkgbrr1lUbSix"
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const result = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = result.data[toCurrency];
  return multiplier * units;
}
