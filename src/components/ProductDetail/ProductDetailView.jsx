import "./ProductDetail.css";


function ProductDetailView({ data, addProduct}) {

  return (
    <>
      <div className="card main-container columns is-flex mx-6 my-3">
        <div className="column is-2">
        <div className="card-image has-background-white is-justify-content-center">
            <figure className="image is-square">
              <img src={data.image} alt={data.title} />
            </figure>
          </div>
        </div>
        <div className="column">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{data.title}</p>
              </div>
            </div>

            <div className="content is-flex-wrap-nowrap">
              {data.description}
              <div className="columns is-flex mt-6 pt-6">
                  <div className="column is-3 is-flex is-justify-content-center is-align-items-center">
                    <strong className="is-size-3">${data.price}</strong>
                  </div>
                  <div className="column is-half">
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
