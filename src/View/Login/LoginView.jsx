// eslint-disable-next-line react/prop-types
function LoginView({ handledLoginSubmit }) {
  return (
    <>
      <div className="hero is-fullheight is-info">
        <div className="hero-body is-justify-content-center is-align-items-flex-start">
          <div className="columns is-flex is-flex-direction-column box">
            <form onSubmit={handledLoginSubmit}>
              <div className="column">
                <label htmlFor="email">Email</label>
                <input
                name="username"
                  className="input is-link"
                  type="text"
                  placeholder="Email address"
                />
              </div>
              <div className="column">
                <label htmlFor="Name">Password</label>
                <input
                name="password"
                  className="input is-link"
                  type="password"
                  placeholder="Password"
                />
                <a href="#" className="is-size-7 has-text-link">
                  forget password?
                </a>
              </div>
              <div className="column">
                <button className="button is-link is-fullwidth" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="has-text-centered">
              <p className="is-size-7">
                {" "}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't have an account?{" "}
                <a href="#" className="has-text-link">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginView;
