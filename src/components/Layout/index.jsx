function index() {
  const token = localStorage.getItem("token");
  
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  
  const handleToggleMenu = () => {
    const navbarBurger = document.querySelector(".navbar-burger");
    const navbarMenu = document.querySelector("#navbarBasicExample");
    navbarMenu.classList.toggle("is-active");
    navbarBurger.classList.toggle("is-active");
  };

  return (token, logOut, handleToggleMenu);
}

export default index;
