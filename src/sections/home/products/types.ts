export type ProductProps = {
  className: string;
} & Product;

export type Product = {
  name: string;
  description: string;
  link: string;
};
