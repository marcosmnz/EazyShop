import { useGlobalContext } from "../Context/ContextGlobal";
import ProductCard from "../components/ProductCard/ProductCard";
import { ToastContainer } from "react-toastify";
function CartPage() {
  const { state, deleteAllProducts } = useGlobalContext();
  const { totalAmounted } = state;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {state.products.length === 0 ? (
        <div>
          <div className="hero is-fullheight-with-navbar is-flex is-justify-content-center is-align-items-center">
            <div className="her-body is-flex-wrap-wrap">
              <div className="is-flex is-justify-content-center is-align-items-center">
                <img
                  src="https://sheinsz.ltwebstatic.com/she_dist/images/cart/sui_img_empty_cart%20-2164551cbe.png"
                  alt=""
                />
              </div>
              <div className="is-flex is-size-4 is-justify-content-center is-align-items-center title">
                Your shopping cart is empty
              </div>
              <div className="is-flex is-justify-content-center is-align-items-center subtitle">
                Add products to your cart now!
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <section className="hero is-flex is-justify-content-center is-align-items-center">
            <div className="hero-body">
              <p className="title">TOTAL AMOUNTED:</p>
              <div className="my-4 is-flex is-justify-content-center is-align-items-center">
                <p className="subtitle">${totalAmounted}</p>
              </div>
              <div className="is-flex is-justify-content-center is-align-items-center">
                <button
                  onClick={deleteAllProducts}
                  className="button is-medium is-danger"
                >
                  <i className="mr-2 fa-solid fa-dumpster-fire"></i>Delete all
                  items
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
        </div>
      )}
    </>
  );
}

export default CartPage;
