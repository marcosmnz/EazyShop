import { useRouteError } from 'react-router-dom'

export default function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className='is-flex-wrap-wrap'>
      <h1 className='is-flex is-align-items-center is-justify-content-center is-size-3 has-text-grey-light'>Oops!</h1>
      <p className='is-flex is-align-items-center is-justify-content-center'>Sorry, an unexpected error has occurred.</p>
      <p className='is-flex is-align-items-center is-justify-content-center'>
        <i><i className="fa-solid fa-bomb"></i>{error.statusText || error.message}<i className="fa-solid fa-bomb"></i></i>
      </p>
    </div>
  )}