import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

function NavBar() {
  const LinksPc = [
    { name: "Our story", link: "/" },
    { name: "Write", link: "/write" }, 
    { name: "About", link: "/about" }, 
    { name: "Sign in", link: "/signin" }, 
  ];

  const LinksMobile = [
    { name: "Our story", link: "/" },
    { name: "About", link: "/about" }, 
  ];

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 660) {
        setOpenNav(false);
      } else {
        setOpenNav(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {openNav ? (
        <div className="flex items-center ml-auto">
          <ul className="flex flex-col space-y-6">
            {LinksMobile.map((link, index) => (
              <li key={index} className="m-3">
                <Link to={link.link} className="text-white hover:underline">
                  <h6 className="text-amber-300">{link.name}</h6>
                </Link>
              </li>
            ))}
          </ul>
          <button className="text-amber-500 text-lg font-semibold hover:underline focus:outline-none">
            Get started
          </button>
        </div>
      ) : (
        <div className="flex items-center ml-auto">
          <ul className="flex space-x-6">
            {LinksPc.map((link, index) => (
              <li key={index} className="m-3">
                <Link to={link.link} className="text-white hover:underline">
                  <h6 className="text-amber-300">{link.name}</h6>
                </Link>
              </li>
            ))}
          </ul>
          <button className="text-amber-500 text-lg font-semibold hover:underline focus:outline-none">
            Get started
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
