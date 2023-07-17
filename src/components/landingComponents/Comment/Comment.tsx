import { IComment } from '../../../interface/ILanding';

const Comment = ({ ...prop }: IComment) => {
  return (
    <div
      className={`relative  ${
        prop.index === 0 ? '-ml-52 mr-30px bg-light-blue text-white' : 'ml-30px bg-white'
      } h-[500px] max-w-[420px]  flex-1 rounded px-[50px] py-20 `}
    >
      <div className="h-[50px] w-[50px] bg-little-quotes-w bg-no-repeat" />
      <p className=" pt-6 text-custom-18/36">{prop.comment}</p>
      <p className="absolute bottom-0 pb-20 text-custom-18/36 font-medium">
        <span>{prop.userName} /</span>
        <span className="pl-2.5">{prop.group}</span>
      </p>
    </div>
  );
};

export default Comment;
