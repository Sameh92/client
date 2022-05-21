import { Grid } from "@mui/material";
import { product } from "../../layout/model/product";
import ProductCard from "./ProductCard";
interface Porps {
  products: product[];
}
export default function ProductList({ products }: Porps) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
