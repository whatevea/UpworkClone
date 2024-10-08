// import React, { useMemo, useState, useEffect, useRef } from "react";
// import NavDrawer from "./NavDrawer";
// import { Link, useNavigate } from "react-router-dom";
// import MobileMenu from "../navigation/MobileMenu";
// // import WhyUpwork from "../navigation/WhyUpwork";
// import { toast } from "react-toastify";
// import LinksDrawer from "./LinksDrawer";
// import FindWork from "../navigation/FindWork";
// import FindTalent from "../navigation/FindTalent";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/reducers/userSlice";
// import DropdownButton from "./DropdownButton";
// import { FaShoppingCart } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const findWorkRef = useRef(null);
//   const findTalentRef = useRef(null);

//   const data = useSelector((state) => state?.User);
//   const cart = useSelector((state) => state?.Cart);
//   let isLoggedIn = data.isLoggedIn;
//   const userDetails = data.userData;

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const userLoggedOut = () => {
//     // Dispatch the logout action to update the Redux state
//     dispatch(logout());
//     // Show success message
//     toast.success("Logout successful");

//     navigate("/auth/login");
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const linkViewer = useMemo(() => {
//     switch (hoveredIndex) {
//       case "Find Talent":
//         return (
//           <div ref={findTalentRef}>
//             <FindTalent />
//           </div>
//         );
//       case "Find Work":
//         return (
//           <div ref={findWorkRef}>
//             <FindWork />
//           </div>
//         );
//       default:
//         return null;
//     }
//   }, [hoveredIndex]);

//   let menuItems = [];

//   if (userDetails && Object.keys(userDetails).length === 0) {
//     // If userDetails is undefined or null, include both options
//     menuItems.push({ label: "Find Work", to: "/auth/login" });
//     menuItems.push({ label: "Find Talent", to: "/auth/login" });
//   } else {
//     // If userDetails is available, include the corresponding option based on user_type
//     menuItems.push(
//       userDetails.user_type === "freelancer"
//         ? { label: "Find Work", to: "/freelancer/jobseeker" }
//         : { label: "Find Talent", to: "/hirer/searchfortalent" }
//     );
//   }

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         findWorkRef.current &&
//         !findWorkRef.current.contains(event.target) &&
//         hoveredIndex === "Find Work"
//       ) {
//         setHoveredIndex(null);
//       }

//       if (
//         findTalentRef.current &&
//         !findTalentRef.current.contains(event.target) &&
//         hoveredIndex === "Find Talent"
//       ) {
//         setHoveredIndex(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [hoveredIndex]);

//   return (
//     <>
//       <div className="font-semibold sticky top-0 w-full bg-white z-20">
//         <header className="px-4 shadow-sm shadow-green-600">
//           <nav className="flex items-center justify-start md:justify-between h-16">
//             <div className="flex items-center justify-between">
//               <div className="lg:hidden w-[20px]">
//                 {isOpen ? (
//                   <i
//                     className="fa-solid fa-xmark fa-lg cursor-pointer"
//                     onClick={toggleMenu}
//                   />
//                 ) : (
//                   <i
//                     className="fa-solid fa-bars fa-lg cursor-pointer"
//                     onClick={toggleMenu}
//                   />
//                 )}
//               </div>
//               <Link className="md:ml-1" to="/buy">
//                 {/* Your logo/svg here */}
//                 <svg
//                   className="w-[150px] h-[30px]"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 102 28"
//                   role="img"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fill="#14a800"
//                     d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
//                   ></path>
//                   <path
//                     fill="#14a800"
//                     d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
//                   ></path>
//                   <polygon
//                     fill="#14a800"
//                     points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
//                   ></polygon>
//                   <path
//                     fill="#14a800"
//                     d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
//                   ></path>
//                   <path
//                     fill="#14a800"
//                     d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
//                   ></path>
//                 </svg>
//               </Link>
//               <div className="gap-6 hidden lg:flex">
//                 <ul className="flex justify-between gap-4 ml-4">
//                   {menuItems.map((item, index) => (
//                     <Link
//                       to={item.to}
//                       key={index}
//                       className={`parent-container ${
//                         hoveredIndex === index ? "hovered" : ""
//                       } flex items-center hover:text-green-500 cursor-pointer text-sm`}
//                       onMouseEnter={() => setHoveredIndex(item.label)}
//                       // onMouseLeave={() => setHoveredIndex(null)}
//                     >
//                       {item.label}
//                       <i
//                         className={`fa-solid fa-angle-down ml-1 mt-1 scale-80 ${
//                           (hoveredIndex === "Find Work" ||
//                             hoveredIndex === "Find Talent") &&
//                           item.label === hoveredIndex
//                             ? "rotate-180 duration-300 ease-in-out"
//                             : ""
//                         }`}
//                       ></i>
//                     </Link>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="justify-between gap-4 hidden md:flex">
//               {/* <div className="lg:border  border-2 border-solid border-gray-300 rounded-xl flex items-center">
//                                 <i className="fa-solid fa-magnifying-glass text-green-600 hover:text-green-600 mr-2 ml-2 scale-125"></i>
//                                 <input
//                                     className="outline-none bg-transparent p-1.5 hidden lg:flex"
//                                     type="text"
//                                     placeholder="Search "
//                                 />
//                             </div> */}
//               <div className="flex justify-between gap-4">
//                 {isLoggedIn ? (
//                   <div className="flex gap-3 items-center">
//                     <NavLink to="/buy/cart">
//                       <div className="relative">
//                         <FaShoppingCart className="text-4xl cursor-pointer text-green-600 hover:text-green-500 transition transform duration-200" />
//                         <div>
//                           {cart?.length > 0 && (
//                             <div className="absolute -top-1 -right-2 bg-red-600 text-sm w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
//                               {cart?.length}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </NavLink>
//                     <DropdownButton userLoggingOut={userLoggedOut} />
//                   </div>
//                 ) : (
//                   <>
//                     <Link
//                       className="hover:text-green-500 flex items-center"
//                       to="/auth/login"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/auth/register"
//                       className="text-white px-3 py-1 hover:bg-green-500 rounded-md bg-green-600 flex items-center"
//                     >
//                       Register
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//       {hoveredIndex !== null && (
//         <LinksDrawer isOpen={true} setHoveredIndex={setHoveredIndex}>
//           {linkViewer}
//         </LinksDrawer>
//       )}
//       <div className="lg:hidden">
//         <NavDrawer isOpen={isOpen} position="left">
//           <MobileMenu />
//         </NavDrawer>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useMemo, useState, useEffect, useRef } from "react";
import NavDrawer from "./NavDrawer";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "../navigation/MobileMenu";
// import WhyUpwork from "../navigation/WhyUpwork";
import { toast } from "react-toastify";
import LinksDrawer from "./LinksDrawer";
import FindWork from "../navigation/FindWork";
import FindTalent from "../navigation/FindTalent";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/userSlice";
import DropdownButton from "./DropdownButton";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const findWorkRef = useRef(null);
  const findTalentRef = useRef(null);

  const data = useSelector((state) => state?.User);
  const cart = useSelector((state) => state?.Cart);
  let isLoggedIn = data.isLoggedIn;
  const userDetails = data.userData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoggedOut = () => {
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    // Show success message
    toast.success("Logout successful");

    navigate("/auth/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const linkViewer = useMemo(() => {
  //   switch (hoveredIndex) {
  //     case "Find Talent":
  //       return (
  //         <div ref={findTalentRef}>
  //           <FindTalent />
  //         </div>
  //       );
  //     case "Find Work":
  //       return (
  //         <div ref={findWorkRef}>
  //           <FindWork />
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // }, [hoveredIndex]);

  let menuItems = [];

  if (userDetails && Object.keys(userDetails).length === 0) {
    // If userDetails is undefined or null, include both options
    menuItems.push({ label: "Buy", to: "/auth/login" });
    menuItems.push({ label: "Sell", to: "/auth/login" });
    menuItems.push({ label: "Profile", to: "/auth/login" });
    menuItems.push({ label: "My Orders", to: "/auth/login" });
  } else {
    // If userDetails is available, include the corresponding options
    menuItems.push({ label: "Buy", to: "/buy" });
    menuItems.push({ label: "Sell", to: "/sell" });
    menuItems.push({ label: "Profile", to: "/user/profile" });
    menuItems.push({ label: "My Orders", to: "/orders" });
  }

  // if (userDetails && Object.keys(userDetails).length === 0) {
  //   // If userDetails is undefined or null, include both options
  //   menuItems.push({ label: "Find Work", to: "/auth/login" });
  //   menuItems.push({ label: "Find Talent", to: "/auth/login" });
  // } else {
  //   // If userDetails is available, include the corresponding option based on user_type
  //   menuItems.push(
  //     userDetails.user_type === "freelancer"
  //       ? { label: "Find Work", to: "/freelancer/jobseeker" }
  //       : { label: "Find Talent", to: "/hirer/searchfortalent" }
  //   );
  // }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        findWorkRef.current &&
        !findWorkRef.current.contains(event.target) &&
        hoveredIndex === "Find Work"
      ) {
        setHoveredIndex(null);
      }

      if (
        findTalentRef.current &&
        !findTalentRef.current.contains(event.target) &&
        hoveredIndex === "Find Talent"
      ) {
        setHoveredIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hoveredIndex]);

  return (
    <>
      <div className="font-semibold sticky top-0 w-full bg-white z-20">
        <header className="px-4 shadow-sm shadow-green-600">
          <nav className="flex items-center justify-start md:justify-between h-16">
            <div className="flex items-center justify-between">
              <div className="lg:hidden w-[20px]">
                {isOpen ? (
                  <i
                    className="fa-solid fa-xmark fa-lg cursor-pointer"
                    onClick={toggleMenu}
                  />
                ) : (
                  <i
                    className="fa-solid fa-bars fa-lg cursor-pointer"
                    onClick={toggleMenu}
                  />
                )}
              </div>
              <Link className="md:ml-1" to="/buy">
                {/* Your logo/svg here */}
                <svg
                  className="w-[150px] h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 102 28"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    fill="#14a800"
                    d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
                  ></path>
                  <path
                    fill="#14a800"
                    d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
                  ></path>
                  <polygon
                    fill="#14a800"
                    points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
                  ></polygon>
                  <path
                    fill="#14a800"
                    d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
                  ></path>
                  <path
                    fill="#14a800"
                    d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
                  ></path>
                </svg>
              </Link>
              <div className="gap-6 hidden lg:flex">
                {/* <ul className="flex justify-between gap-4 ml-4">
                  {menuItems.map((item, index) => (
                    <Link
                      to={item.to}
                      key={index}
                      className={`parent-container ${
                        hoveredIndex === index ? "hovered" : ""
                      } flex items-center hover:text-green-500 cursor-pointer text-sm`}
                      onMouseEnter={() => setHoveredIndex(item.label)}
                      // onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.label}
                      <i
                        className={`fa-solid fa-angle-down ml-1 mt-1 scale-80 ${
                          (hoveredIndex === "Find Work" ||
                            hoveredIndex === "Find Talent") &&
                          item.label === hoveredIndex
                            ? "rotate-180 duration-300 ease-in-out"
                            : ""
                        }`}
                      ></i>
                    </Link>
                  ))}
                </ul> */}
                <ul className="flex justify-between gap-4 ml-4">
                  {menuItems.map((item, index) => (
                    <Link
                      to={item.to}
                      key={index}
                      className={`flex items-center hover:text-green-500 cursor-pointer text-base font-bold text-green-600`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="justify-between gap-4 hidden md:flex">
              {/* <div className="lg:border  border-2 border-solid border-gray-300 rounded-xl flex items-center">
                                <i className="fa-solid fa-magnifying-glass text-green-600 hover:text-green-600 mr-2 ml-2 scale-125"></i>
                                <input
                                    className="outline-none bg-transparent p-1.5 hidden lg:flex"
                                    type="text"
                                    placeholder="Search "
                                />
                            </div> */}
              <div className="flex justify-between gap-4">
                {isLoggedIn ? (
                  <div className="flex gap-3 items-center">
                    <NavLink to="/buy/cart">
                      <div className="relative">
                        <FaShoppingCart className="text-4xl cursor-pointer text-green-600 hover:text-green-500 transition transform duration-200" />
                        <div>
                          {cart?.length > 0 && (
                            <div className="absolute -top-1 -right-2 bg-red-600 text-sm w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                              {cart?.length}
                            </div>
                          )}
                        </div>
                      </div>
                    </NavLink>
                    <DropdownButton userLoggingOut={userLoggedOut} />
                  </div>
                ) : (
                  <>
                    <Link
                      className="hover:text-green-500 flex items-center"
                      to="/auth/login"
                    >
                      Login
                    </Link>
                    <Link
                      to="/auth/register"
                      className="text-white px-3 py-1 hover:bg-green-500 rounded-md bg-green-600 flex items-center"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* {hoveredIndex !== null && (
        <LinksDrawer isOpen={true} setHoveredIndex={setHoveredIndex}>
          {linkViewer}
        </LinksDrawer>
      )} */}
      <div className="lg:hidden">
        <NavDrawer isOpen={isOpen} position="left">
          <MobileMenu />
        </NavDrawer>
      </div>
    </>
  );
};

export default Navbar;
