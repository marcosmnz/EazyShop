/* eslint-disable react/prop-types */
import "bulma/css/bulma.min.css";
import { Link, useLocation } from "react-router-dom";
import "./productCard.css";
import { useGlobalContext } from "../../Context/ContextGlobal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line react/prop-types
function ProductCard({ productData }) {
  const location = useLocation();
  const { addProduct, removeProduct } = useGlobalContext();
  const { title, image, description, price, cantidad } = productData || {};
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
      {location.pathname !== "/cart" ? (
        <div className="card-container column is-3">
          {/* eslint-disable-next-line react/prop-types */}
          <div className="card set-hover">
            <Link
              to={`/product/${productData.id}/${productData.title}`}
              state={{ productData }}
            >
              <div className="card-image">
                <figure className="image is-square">
                  <img src={image} alt="Placeholder image"></img>
                </figure>
              </div>
            </Link>

            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{title}</p>
                </div>
              </div>
              <div className="content">
                {description}
                <br></br>
                <br></br>
                <div className="columns">
                  <div className="column is-half is-flex is-justify-content-center is-align-items-center">
                    <strong>${price}</strong>
                  </div>
                  <div className="column is-half">
                    <button
                      onClick={() => addProduct(productData)}
                      className="button is-warning"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-container column is-2">
          {/* eslint-disable-next-line react/prop-types */}
          <div className="card set-hover">
            <Link
              to={`/product/${productData.id}/${productData.title}`}
              state={{ productData }}
            >
              <div className="card-image">
                <figure className="image is-square">
                  <img src={image} alt="Placeholder image"></img>
                </figure>
              </div>
            </Link>

            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-6">{title}</p>
                </div>
              </div>
              <div className="columns">
                <div className=" column is-auto is-flex is-justify-content-center is-align-items-center">
                  Quantity: {cantidad}
                </div>
                <div className="column is-auto is-flex is-justify-content-center is-align-items-center">
                  <strong>${price}</strong>
                </div>
              </div>
              <div className="is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
              <button
                onClick={() => removeProduct(productData.id)}
                className="my-1 button is-small is-danger"
              >
                <i className="mr-2 fa-regular fa-trash-can"></i>Remove item
              </button>
              <button
                onClick={() => addProduct(productData)}
                className="button is-small is-success"
              >
                <i className="mr-2 fa-regular fa-plus"></i>Add another item
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
