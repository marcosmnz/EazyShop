import ProductCard from "../ProductCard/ProductCard";

// eslint-disable-next-line react/prop-types
function DashboardView({ data = [] }) {
  return (
    <>
      <div className="is-flex-wrap-wrap m-3 gap-3 columns">
        {data.length > 0 &&
          data.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
      </div>
    </>
  );
}

export default DashboardView;
