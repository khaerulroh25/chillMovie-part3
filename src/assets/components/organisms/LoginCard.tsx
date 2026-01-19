import Button from "../atoms/Buttons";
import LoginForm from "./LoginForm";
import BrandLogo from "../atoms/BrandLogo";
import googleIcon from "../../img/icons/google-icon.png";
import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <div
      className="
        mt-[172px]
        md:mt[181px]
        w-[306px]
        h-[423px]
        md:w-[529px]
        md:h-[663px]
        rounded-[8px]
        bg-[#181A1CD6]
        backdrop-blur-xl
        p-[24px]
        md:p-[40px]
        text-white
        flex
        flex-col
        gap-[20px]
        md:gap-[37px]
        shadow-2xl
      "
    >
      <div
        className=" flex
                      items-center
                      justify-center
                      w-[94px]
                      h-[24px]
                      md:w-[163px]
                      md:h-[44px]
                      gap-[4px]
                      mx-auto
                      "
      >
        <BrandLogo />
      </div>
      <div
        className="w-[120px]
                  h-[44px]
                  md:w-[200px]
                  md:h-[65px]
                  flex
                  flex-col
                  items-center
                  gap-[8px]
                  mx-auto
                  font-sans"
      >
        <h3
          className="
              flex
              items-center
              justify-center
              font-bold
              text-[18px]
              md:text-[32px]
              leading-[110%]
              text-center
            "
        >
          Masuk
        </h3>
        <p
          className="
            font-normal
            text-[10px]
            md:text-[16px]
            leading-[140%]
            tracking-[0.2px]
            text-center
            text-white
          "
        >
          Selamat datang kembali!
        </p>
      </div>

      <div className="flex flex-col gap-[7px] md:gap-[12px]">
        <LoginForm />
        <div className="flex justify-between items-center text-[10px] md:text-[16px]">
          <p
            className="
            font-sans
            font-normal
            leading-[22.4px]
            tracking-[0.2px]
            text-gray-300
          "
          >
            Belum punya akun?
            <Link
              to="/register"
              className="
            ml-1
            leading-[22.4px]
            tracking-[0.2px]
            text-white
            cursor-pointer
          "
            >
              Daftar
            </Link>
          </p>
          <p
            className="
            font-sans
            font-normal
            leading-[22.4px]
            tracking-[0.2px]
            text-gray-300
            cursor-pointer
          "
          >
            Lupa kata sandi?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <Button className="w-[258px] h-[30px] md:w-[449px] md:h-[50px] text-[10px] md:text-[16px]">
          Masuk
        </Button>

        <div className="text-center text-gray-400 text-[10px] md:text-[16px]">
          Atau
        </div>

        <Button
          className="w-[258px] h-[30px] md:w-[449px] md:h-[50px] text-[10px] md:text-[16px]"
          variant="outline"
        >
          <div className="flex items-center justify-center gap-[11px] md:gap-[20px]">
            <img
              src={googleIcon}
              alt="Google"
              className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]"
            />
            <span>Masuk dengan Google</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
