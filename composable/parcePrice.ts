export const parcePrice = (price: string) => price.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
