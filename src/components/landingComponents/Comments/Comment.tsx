import { IComment } from '../../../interface/ILanding';

const Comment = ({ ...prop }: IComment) => {
  return (
    <div
      className={`relative  ${
        prop.index === 0
          ? 'bg-light-blue text-white mobile:-ml-14 md:-ml-10 md:mr-30px  lg:-ml-52'
          : 'ml-30px bg-white mobile:hidden md:ml-10 md:block'
      } h-[500px] flex-1 rounded px-[50px] py-20 `}
    >
      <div
        className={`h-[50px] w-[50px] ${
          prop.index === 0 ? 'bg-little-quotes-w' : 'bg-little-quotes-o'
        } bg-no-repeat`}
      />
      <p className=" pt-6 text-custom-18/36">{prop.comment}</p>
      <p className="absolute bottom-0 pb-20 text-custom-18/36 font-medium">
        <span>{prop.userName} /</span>
        <span className="pl-2.5">{prop.group}</span>
      </p>
    </div>
  );
};

export default Comment;
