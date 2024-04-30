import { ImCheckboxChecked } from "react-icons/im";

export const Header = () => {
  return (
    <div className="flex items-center md:gap-4 gap-2 justify-center text-blue-500 py-6">
      <ImCheckboxChecked className="text-3xl" />
      <span className="font-bold md:text-2xl text-base leading-normal">
        {" "}
        Awesome App
      </span>
    </div>
  );
};
