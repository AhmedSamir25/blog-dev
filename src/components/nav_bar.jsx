import { useEffect, useState } from "react";
function NavBar() {
    const LinksPc = [
        { name: "Our story", link: "/" },
        { name: "Write", link: "/" },
        { name: "About", link: "/" },
        { name: "Sign in", link: "/" },
      ];
    
      const LinksMobile = [
        { name: "Our story", link: "/" },
        { name: "About", link: "/" },
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
    return(
        <div>
            {openNav ? (
            <div className="flex items-center ml-auto">
              <ul className="flex space-x-6">
                {LinksMobile.map((link, index) => (
                  <li key={index} className="m-3">
                    <a href={link.link} className="text-white hover:underline">
                      <h6 className="text-amber-300">{link.name}</h6>
                    </a>
                  </li>
                ))}
              </ul>
              <button className="text-amber-500 text-lg font-semibold hover:underline focus:outline-none">
              Get started
              </button>
            </div>
          ) : (
            // Pc
            <div className="flex items-center ml-auto">
              <ul className="flex space-x-6">
                {LinksPc.map((link, index) => (
                  <li key={index} className="m-3">
                    <a href={link.link} className="text-white hover:underline">
                      <h6 className="text-amber-300">{link.name}</h6>
                    </a>
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