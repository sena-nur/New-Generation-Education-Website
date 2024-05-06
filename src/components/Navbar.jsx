import React, { useEffect, useState } from "react";
import logo from "../assets/logo .png";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";
const Navbar = ({ position }) => {
  const height = window.innerHeight - 80;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const redirectToSignUp = () => {
    navigate("/signup");
  };
  const redirectToContact = () => {
    navigate("/contact");
  };

  const redirectToLogin = () => {
    navigate("/signin");
  };

  const redirectToTeam = () => {
    navigate("/team");
  };

  const redirectToAbout = () => {
    navigate("/");
    setTimeout(function () {
      scroller.scrollTo("aboutComponent", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 100);
  };

  const redirectToHome = () => {
    navigate("/");
    setTimeout(function () {
      scroller.scrollTo("homeComponent", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 100);
  };

  const redirectToPopularCourses = () => {
    navigate("/");
    setTimeout(function () {
      scroller.scrollTo("popularCoursesComponent", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 100);
  };

  const redirectToInstructor = () => {
    navigate("/");
    setTimeout(function () {
      scroller.scrollTo("instructorComponent", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 100);
  };

  const redirectToBlog = () => {
    navigate("/");
    setTimeout(function () {
      scroller.scrollTo("blogComponent", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > height) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "AllCourses", path: "allcourses" },
    { link: "Team", path: "team" },
    { link: "Blog", path: "blog" },
    { link: "About", path: "about" },
    { link: "Contact", path: "contact" },
    { link: "BeInstructor", path: "beinstructor" },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header
      className={`w-full z-50 md:bg-transparent bg-navbar-light 
      ${position ? "block" : "fixed"}  top-0 left-0 right-0`}
    >
      <nav
        className={`py-4 max-2xl:px-5 px-12 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-text-black duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8 max-2xl:gap-4">
          <a
            href=""
            className="text-1.5xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt=""
              className={`w-60 inline-block items-center ${
                isSticky ? "invert" : ""
              }`}
            ></img>
          </a>

          <ul className="md:flex space-x-10 max-2xl:space-x-6 max-xl:space-2 hidden">
            {navItems.map(({ link, path }) => (
              <li key={link}>
                <Link
                  onClick={() => {
                    if (link === "BeInstructor") {
                      redirectToInstructor();
                    }
                    if (link === "Home") {
                      redirectToHome();
                    }
                    if (link === "AllCourses") {
                      redirectToPopularCourses();
                    }
                    if (link === "Blog") {
                      redirectToBlog();
                    }
                    if (link === "About") {
                      redirectToAbout();
                    }
                    if (link === "Contact") {
                      redirectToContact();
                    }
                    if (link === "Team") {
                      redirectToTeam();
                    }
                  }}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className={`block text-base hover:text-purple hover:cursor-pointer first:font-medium ${
                    isSticky ? "text-white " : "text-black "
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* Large devices */}
          <div className="max-xl:hidden flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="search..."
                className={`rounded-full px-4 py-2 bg-transparent border-2 focus:text-black ${
                  isSticky ? "border-white" : "border-black"
                }`}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="text-black hover:text-orange absolute right-2 top-2">
                <FaSearch className={`h-6 w-6 ${isSticky ? "invert" : ""}`} />
              </button>
            </div>
          </div>
          <div className="space-x-12 max-2xl:space-x-5 max-xl:space-x-2 flex max-lg:hidden items-center">
            <button
              onClick={redirectToLogin}
              className="bg-button-background text-white py-2 px-4 transition-all duration-300 rounded hover:bg-orange "
            >
              Login
            </button>
            <button
              onClick={redirectToSignUp}
              className={`${
                isSticky ? "bg-text-white" : "bg-text-black"
              }  text-orange py-2 px-4 transition-all duration-300 rounded hover:bg-blue`}
            >
              Sign Up
            </button>
          </div>
          {/* Menu for mobile devices */}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-customm-blue focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes
                  className={`fill-text-black h-6 w-6 ${
                    isSticky ? "invert" : ""
                  } `}
                />
              ) : (
                <FaBars
                  className={`fill-text-black h-6 w-6 ${
                    isSticky ? "invert" : ""
                  } `}
                />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile menu */}

        <div
          className={` space-y-4 px-4 mt-20 py-7 ${
            isSticky ? "invert" : ""
          } bg-text-white ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <li style={{ listStyle: "none" }} key={link}>
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className={` block hover:cursor-pointer hover:text-purple first:font-medium`}
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
