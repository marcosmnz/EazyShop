import { useGlobalContext } from "../Context/ContextGlobal";
import ProductCard from "../components/ProductCard/ProductCard";
function CartPage() {
  const { state, deleteAllProducts } = useGlobalContext();
  const { totalAmounted } = state;
  return (
    <>
      <section className="hero is-info is-flex is-justify-content-center is-align-items-center">
        <div className="hero-body">
          <p className="title">TOTAL AMOUNTED:</p>
          <div className="my-4 is-flex is-justify-content-center is-align-items-center">
            <p className="subtitle">${totalAmounted}</p>
          </div>
          <div className="is-flex is-justify-content-center is-align-items-center">
            <button onClick={deleteAllProducts} className="button is-medium is-danger">
              <i className="mr-2 fa-solid fa-dumpster-fire"></i>Delete all items
            </button>
          </div>
        </div>
      </section>
      <div className="is-flex-wrap-wrap m-3 gap-3 columns">
        {state.products.length > 0 &&
          state.products.map((product) => {
            return <ProductCard key={product.id} productData={product} />;
          })}
      </div>
    </>
  );
}

export default CartPage;
