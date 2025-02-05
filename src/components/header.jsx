import NavBar from "./nav_bar";

function Header() {
  var imageLink = "https://img.icons8.com/?size=64&id=b4tP3JklMa4x&format=png";
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-amber-900 text-white p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="pl-3 w-16 h-16"
            src= {imageLink}
            alt="Logo"
          />
        </div>
        <NavBar/>
      </div>
    </div>
  );
}

export default Header;