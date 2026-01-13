import logo from "../../img/icons/logo.png";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Chill Logo" className="w-6 h-6 md:w-10 md:h-10" />

      <span
        className="
          font-brand
          text-[20px]
          md:text-[48px]
          text-white
          leading-[55px]
          h-[44px]
          flex
          items-center
        "
      >
        CHILL
      </span>
    </div>
  );
}
