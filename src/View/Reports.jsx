function Reports() {
  return (
    <div className="container mt-3">
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email input"
                value=""
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>View Error</option>
                  <option>Functionality error</option>
                  <option>Another error</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Describes the error</label>
            <div className="control">
              <textarea className="textarea" placeholder=""></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />I agree to the{" "}
                <a href="https://www.privacypolicies.com/blog/sample-terms-conditions-template/">terms and conditions</a>
              </label>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <a href="/home">
                <button className="button is-link is-light">Cancel</button>
              </a>
            </div>
          </div>
        </div>
        <div className="column is-3"></div>
      </div>
    </div>
  );
}

export default Reports;
