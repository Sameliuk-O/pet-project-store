import { ILanding } from '../../../interface/ILanding';

const ListInfo = ({ ...props }: ILanding) => {
  return (
    <div className="sm:px-7 md:pl-50px md:pr-12">
      <div className="flex justify-center pb-8">
        <img alt={props.title} className="h-[140px]" src={props.image} />
      </div>
      <div className="pb-9">
        <p className={'text-custom-18/26 font-medium text-dark-blue'}>{props.title}</p>
        <div className="mt-4 h-1 w-16 bg-custom-orange" />
      </div>
      <p className="text-custom-16/32 font-medium text-text-grey-blue">{props.description}</p>
    </div>
  );
};

export default ListInfo;
