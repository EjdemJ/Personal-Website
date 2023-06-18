// "use client";
// import { MutableRefObject, useEffect, useRef } from "react";
// import { MdClose } from "react-icons/md";
// import Aos from "aos";
// import "aos/dist/aos.css";

// type Props = {
//   open: boolean;
//   links: { name: string; href: string }[];
//   toggleMobileMenu: () => void;
// };

// const MobileMenu = ({ open, toggleMobileMenu, links }: Props) => {
//   const menuRef = useRef<any>(null);

//   return (
//     <div
//       ref={menuRef}
//       className={`fixed ${open ? "top-[0]" : "top-[-100%]"}
//       left-0 z-20 flex h-full w-full bg-black transition-all duration-300 md:hidden`}
//     >
//       <MdClose
//         color="white"
//         size={40}
//         cursor="pointer"
//         className="absolute right-[35px] top-[35px]"
//         onClick={toggleMobileMenu}
//       />
//       <ul className="my-[20%] flex w-full flex-col gap-6">
//         {links.map((link) => (
//           <li key={link.href} className="mobile-nav-link text-white">
//             {link.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MobileMenu;
