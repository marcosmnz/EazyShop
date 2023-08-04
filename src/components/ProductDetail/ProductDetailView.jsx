/* eslint-disable react/prop-types */
import "./ProductDetail.css";

import { ToastContainer } from "react-toastify";

function ProductDetailView({ data, addProduct}) {

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
      <div className="is-flex is-flex-wrap-wrap card main-container columns is-flex-mobile is-flex-tablet is-flex mx-6 my-3">
        <div className="column is-2">
        <div className="card-image has-background-white is-justify-content-center">
            <figure className="image is-square">
              <img src={data.image} alt={data.title} />
            </figure>
          </div>
        </div>
        <div className="column is-flex is-flex-flex-wrap">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="card-title title is-4">{data.title}</p>
              </div>
            </div>

            <div className="content is-flex-wrap-nowrap">
              <div className="card-text">
              {data.description}
              </div>
              <div className="columns is-flex is-flex-wrap-wrap mt-6 pt-6">
                  <div className="column is-3 is-flex is-justify-content-center is-align-items-center">
                    <strong className="is-size-3">${data.price}</strong>
                  </div>
                  <div className="column is-flex is-justify-content-center is-align-items-center is-half">
                    <button onClick={() => addProduct(data)} className="button is-size-4 is-warning">
                      <i className="fa-solid fa-cart-arrow-down"></i>Add to cart
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailView;
