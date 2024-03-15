import { IoIosArrowRoundForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";

function SliderNavigationButton({ className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-2xl disabled:bg-[#00fff6] disabled:text-black broder-2 border-[white]",
        className
      )}
    >
      <IoIosArrowRoundForward />
    </button>
  );
}

export default SliderNavigationButton;
