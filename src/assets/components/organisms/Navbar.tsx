import { Link } from "react-router-dom";
import logo from "../../img/icons/logo.png";
import AvatarDropdown from "../molecules/AvatarDropdown";

export default function Navbar() {
  return (
    <nav className="w-full bg-black">
      <div
        className="
          h-[72px]
          flex
          items-center
          px-4
          md:px-[80px]
        "
      >
        <div className="flex items-center gap-[12px] md:gap-[80px] md-text-[18px] text-[10px] md:text-[16px] font-medium text-white">
          <Link to="/home">
            <div className="flex item-center gap-[4px]">
              <img
                src={logo}
                alt="Chill Logo"
                className="w-[17px] h-[15px] md:w-[25px] md:h-[22px]"
              />
              <span className="hidden md:inline text-[32px] font-brand leading-none">
                CHILL
              </span>
            </div>
          </Link>

          <span className="cursor-pointer hover:text-gray-300">Series</span>
          <span className="cursor-pointer hover:text-gray-300">Film</span>
          <span className="cursor-pointer hover:text-gray-300">
            <Link to="/daftarsaya">Daftar Saya</Link>
          </span>
        </div>

        <div className="ml-auto flex items-center">
          <AvatarDropdown />
        </div>
      </div>
    </nav>
  );
}
