import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";


export async function loader() {
  const products = await getProducts();
  return products;
}

export default function Products() {
  const products = useLoaderData() as Product[] // Comunica lo que retorna el loader con el componente

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Products</h2>
        <Link
          to="products/new"
          className="rounded-xl bg-indigo-600 text-sm p-3 text-white shadow hover:bg-indigo-500"
        >
          New Product
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetails
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
