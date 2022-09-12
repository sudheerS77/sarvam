// import React from "react";
// import { RiSearchLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// const LgNavbar = () => {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "About us",
//       link: "/about",
//     },
//     {
//       name: "Products",
//       link: "/",
//     },
//     {
//       name: "Business Partners",
//       link: "/",
//     },
//     {
//       name: "Training",
//       link: "/",
//     },
//     {
//       name: "Careers",
//       link: "/",
//     },
//     {
//       name: "Contact us",
//       link: "/",
//     },
//     {
//       name: "Videos",
//       link: "/",
//     },
//   ];
//   const navItems1 = [
//     {
//       name: "Wish List",
//       link: "/",
//     },
//     {
//       name: "Cart",
//       link: "/",
//     },
//   ];
//   return (
//     <>
//       <div
//         style={{ background: "#002147" }}
//         className="flex flex-col items-center justify-center fixed w-full z-50 bg-gray-50"
//       >
//         <div className="w-full flex items-end justify-between gap-10 px-12 pb-4">
//           <div className="flex items-end gap-5 w-full ">
//             <img
//               src="https://sarvamsafety.com/image/catalog/logo1.png"
//               alt=""
//               className="w-96 h-20 bg-gray-400 rounded-b-xl pb-1 px-2 shadow-xl"
//             />
//             <div
//               style={{ background: "#002147" }}
//               className="flex items-center gap-2 w-5/12 border border-gray-100 h-10 bg-gray-50 rounded-md shadow-md"
//             >
//               <input
//                 style={{ background: "#002147" }}
//                 type="text"
//                 className=" w-full h-8 px-3 font-semibold text-gray-50"
//                 placeholder="search"
//               />
//               <span className="text-gray-50 py-2.5 px-3 rounded-r-md">
//                 <RiSearchLine className="font-bold text-xl" />
//               </span>
//             </div>
//           </div>
//           <div>
//             <button className="px-4 py-1 bg-red-600 rounded-md text-gray-50 font-semibold">
//               Login
//             </button>
//           </div>
//         </div>
//         <div
//           style={{ background: "#003366" }}
//           className="flex items-center justify-between w-full px-12 bg-green-500 py-2 font-bold text-gray-50"
//         >
//           <div className="flex items-center justify-center gap-5 list-none">
//             {navItems.map((item) => (
//               <Link to={`${item.link}`} key={`${item.name}`}>
//                 <li>{item.name}</li>
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center justify-center gap-5 list-none">
//             {navItems1.map((item) => (
//               <Link to={`${item.link}`} key={`${item.name}`}>
//                 <li>{item.name}</li>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LgNavbar;
