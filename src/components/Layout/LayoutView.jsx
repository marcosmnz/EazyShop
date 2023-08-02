/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./../../Context/ContextGlobal";
// eslint-disable-next-line react/prop-types
export default function LayoutView({ children }) {
  const { state } = useGlobalContext();
  const token = localStorage.getItem("token");
  const logOut = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <>
      {token ? (
        <div className="has-background-white">
          <nav
            className=" mb-3 has-shadow navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="mx-4 navbar-brand">
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
                <Link className="navbar-item" to="/home">
                  Home
                </Link>

                <a className="navbar-item">Product</a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Category</a>

                  <div className="navbar-dropdown">
                    <Link to="/category/jewelery" className="navbar-item">
                      Jewelry
                    </Link>
                    <Link to="/category/men's clothing" className="navbar-item">
                      Men's Clothing
                    </Link>
                    <Link
                      to="/category/women's clothing"
                      className="navbar-item"
                    >
                      Women's Clothing
                    </Link>
                    <Link to="/category/electronics" className="navbar-item">
                      Electronics
                    </Link>
                    <hr className="navbar-divider"></hr>
                    <Link to="/issues" className="navbar-item">
                      Report an issue
                    </Link>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link to="/cart" className="button is-rounded is-light">
                      <div className="mr-3">{state.products.length}</div>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="is-flex is-justify-content-center is-align-items-center navbar-item has-dropdown is-hoverable">
              <figure className="navbar-item mr-5 image is-48x48">
                <img
                  className="is-rounded"
                  src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
                />
              </figure>
              <div className="navbar-dropdown is-right">
                <Link to="/profile" className="navbar-item">Profile</Link>
                <hr className="navbar-divider"></hr>
                <a onClick={() => {logOut()}} className="navbar-item">LogOut</a>
              </div>
              </div>
            </div>
          </nav>
          <div>{children}</div>
        </div>
      ) : (
        <div>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
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
                    <Link to="/category/jewelery" className="navbar-item">
                      Jewelry
                    </Link>
                    <Link to="/category/men's clothing" className="navbar-item">
                      Men's Clothing
                    </Link>
                    <Link
                      to="/category/women's clothing"
                      className="navbar-item"
                    >
                      Women's Clothing
                    </Link>
                    <Link to="/category/electronics" className="navbar-item">
                      Electronics
                    </Link>
                    <hr className="navbar-divider"></hr>
                    <Link to="/issues" className="navbar-item">
                      Report an issue
                    </Link>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link to="/cart" className="button is-rounded is-light">
                      <div className="mr-3">{state.products.length}</div>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                    <a className="button is-link">
                      <strong>SignUp</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div>{children}</div>
        </div>
      )}
    </>
  );
}
