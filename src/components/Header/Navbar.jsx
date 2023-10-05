import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
    const user = null;
  const navLinks = [
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Destination",
      path: "/destination",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between w-3/4 mx-auto my-4 bg-transparent">
        <img className="w-28" src={logo} alt="logo of travel guru" />
        <div className="relative">
          <BiSearch className="absolute text-xl left-2 top-3.5"></BiSearch>
          <input
            className="bg-[#FFFFFF33] text-white rounded-md border-white border-2 py-2 px-8"
            type="text"
            placeholder="Search your Destination..."
            name=""
            id=""
          />
        </div>
        <div className="flex gap-8">
          {navLinks.map((navLink) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-primary py-2 px-5 text-black rounded-md hover:bg-secondery font-medium"
                  : "text-white py-2 px-5 rounded-md hover:bg-secondery font-medium"
              }
              key={navLink.path}
              to={navLink.path}>
              {navLink.name}
            </NavLink>
          ))}
        </div>
        <div>{user ? <button className="bg-primary py-2 px-5 text-black rounded-md hover:bg-secondery font-medium">Logout</button> : 
        <button className="bg-primary py-2 px-5 text-black rounded-md hover:bg-secondery font-medium">Login</button>}</div>
      </div>
    </div>
  );
};

export default Navbar;
