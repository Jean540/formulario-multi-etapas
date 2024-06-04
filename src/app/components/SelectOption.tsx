import { useForm } from "../contexts/FormContext";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  handleSetLevel: () => void;
};

export const SelectOption = ({
  title,
  description,
  icon,
  selected,
  handleSetLevel: handleSelectLevel,
}: Props) => {
  const { state, dispatch } = useForm();
  return (
    <div
      className={`flex border-2 border-solid  rounded-[10px] p-[20px] mb-[15px] items-center ${
        selected
          ? "border-[#25cd89]"
          : "cursor-pointer border-[#16195c] hover:border-[#496459]"
      }`}
      onClick={handleSelectLevel}
    >
      <div className="w-[60px] h-[60px] rounded-full bg-[#191A59] flex justify-center items-center text-[25px]">
        {icon}
      </div>
      <div className="flex-1 ml-[20px]">
        <div className="text-[17px] font-bold mb-[7px]">{title}</div>
        <div className="text-[14px] text-[#b8b8d4]">{description}</div>
      </div>
    </div>
  );
};
