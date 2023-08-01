import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import "./productCard.css";

// eslint-disable-next-line react/prop-types
function ProductCard({ productData }) {
  const { title, image, description, price } = productData || {};
  return (
    <>
      <div className="column is-3">
        {/* eslint-disable-next-line react/prop-types */}
        <Link to={`/product/${productData.id}/${productData.title}`} state={{ productData }}>
          <div className="card set-hover">
            <div className="card-image">
              <figure className="image is-square">
                <img src={image} alt="Placeholder image"></img>
              </figure>
            </div>
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
                    <button className="button is-warning">
                      <i className="fa-solid fa-cart-arrow-down"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
