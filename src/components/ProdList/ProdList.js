import Product from "../Product/Product";
import "./ProdList.css";

const ProdList = ({ products }) => {
  return (
    <div className="container">
      <div className="columns is-multiline">
        {products.map((prod) => (
          <Product key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ProdList;
