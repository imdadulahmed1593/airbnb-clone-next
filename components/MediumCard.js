import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer group ">
      <div
        className="rounded-xl relative overflow-hidden
        h-80 w-80"
      >
        <Image
          src={img}
          className="group-hover:scale-105 transition transform duration-300 ease-out "
          layout="fill"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
