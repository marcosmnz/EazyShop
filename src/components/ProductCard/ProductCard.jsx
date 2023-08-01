import "bulma/css/bulma.min.css";
import { Link, useLocation } from "react-router-dom";
import "./productCard.css";
import { useGlobalContext } from "../../Context/ContextGlobal"


// eslint-disable-next-line react/prop-types
function ProductCard({ productData }) {
  const location = useLocation()
  const {addProduct, removeProduct} = useGlobalContext()
  console.log(location)
  const { title, image, description, price } = productData || {};
  return (
    <>
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
                    {location.pathname !== "/cart" ? (
                      <button onClick={() => addProduct(productData)} className="button is-warning">
                        <i className="fa-solid fa-cart-arrow-down"></i>Add to
                        cart
                      </button>
                    ) : <button onClick={() => removeProduct(productData)} className="button is-danger">
                    <i className="fa-solid fa-cart-arrow-down"></i>Remove
                    item
                  </button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default ProductCard;
