import "bulma/css/bulma.min.css";
import { useGlobalContext } from './../../Context/ContextGlobal'
// eslint-disable-next-line react/prop-types
export default function LayoutView({ children }) {
  const { productos, state } = useGlobalContext()

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <strong className="is-size-3 has-text-link">
              <i className="fa-brands fa-shopware"></i>EAZY SHOP
            </strong>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/home">
              Home
            </a>

            <a className="navbar-item">Product</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Category</a>

              <div className="navbar-dropdown">
                <a href="/category/jewelery" className="navbar-item">Jewelry</a>
                <a className="navbar-item">Men's Clothing</a>
                <a className="navbar-item">Women's Clothing</a>
                <a href="/category/electronics" className="navbar-item">Electronics</a>
                <hr className="navbar-divider"></hr>
                <a href="/issues" className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="cart" className="button is-rounded is-light">
                <div className="mr-3">{state.products.length}</div>
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
                <a className="button is-link">
                  <strong>Sign up</strong>
                </a>
                <a href="/login" className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}
