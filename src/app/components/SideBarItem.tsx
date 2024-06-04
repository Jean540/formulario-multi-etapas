import Image from "next/image";
import Link from "next/link";
import profile from "../../../public/profile.png";
import book from "../../../public/book.png";
import mail from "../../../public/mail.png";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
};

export const SideBarItem = ({ title, description, icon, path }: Props) => {
  return (
    <div className="my-[30px] mx-0 cursor-pointer">
      <Link href={path} className="flex items-center">
        <div className="flex-1 mr-[20px]">
          <div className="text-right font-bold mb-[5px] text-[15px] text-white">
            {title}
          </div>
          <div className="text-right text-[13px] text-[#b8b8d4] ">
            {description}
          </div>
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-[#494a7c] flex justify-center items-center ">
          {icon === "profile" ? (
            <Image
              width={24}
              height={24}
              src={profile}
              alt={`icone de ${icon}`}
            />
          ) : icon === "book" ? (
            <Image width={24} height={24} src={book} alt={`icone de ${icon}`} />
          ) : (
            <Image width={24} height={24} src={mail} alt={`icone de ${icon}`} />
          )}
        </div>
        <div className="w-[6px] h-[6px]  box-content border-[3px] border-solid border-[#494a7c] rounded-full ml-[30px] -mr-[6px] bg-[#02044a]"></div>
      </Link>
    </div>
  );
};
