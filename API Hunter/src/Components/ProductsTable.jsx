78.
+ 0
import ProductCard from "./ProductCard";

const ProductsTable = ({ data }) => {
  return (
    <table className="table-container">
      <thead className="table-header">
        <tr>
          <th>S No</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            brand={product.brand }
            category={product.category}
            price={product.price}
            serialNo={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
