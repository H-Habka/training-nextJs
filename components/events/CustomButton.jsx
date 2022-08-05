import Link from "next/link";
import RightArrowIcon from "../icons/RightArrowIcon";

const CustomButton = ({ href, children, icon, onClick, className }) => {
    return (
        <div
            onClick={onClick}
            className={`${className} text-green-50 hover:text-black hover:bg-green-200 w-fit bg-green-400 px-3 py-1 font-bold rounded flex justify-center items-center gap-2 cursor-pointer`}
        >
            {href ? (
                <Link href={href}>{children}</Link>
            ) : (
                <button>{children}</button>
            )}
            {icon && <RightArrowIcon />}
        </div>
    );
};

export default CustomButton;
