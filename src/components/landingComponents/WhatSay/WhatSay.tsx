import { IComment } from '../../../interface/ILanding';
import { Comment } from '../Comment';

const COMMENTS: IComment[] = [
  {
    comment: '“I love oranges!! tasty mmmmm…..”',
    group: 'Ironhack',
    userName: 'Marjon Siero',
  },
  {
    comment: '“If life gives you lemons, f*ck it, I just want more oranges”',
    group: 'Ironhack',
    userName: 'Dina Korkmazova',
  },
];

const WhatSay = () => {
  return (
    <div className="container m-auto mb-20">
      <div className="flex">
        <div className="w-2/5 bg-flags-svg bg-no-repeat pl-6 pr-16 pt-10">
          <p className="max-w-xs text-custom-34/45 font-bold text-custom-orange">
            What Our Customers Say
          </p>
        </div>
        <div className="mr-[30px] flex w-3/5 rounded bg-custom-orange py-56">
          {COMMENTS.map((el, index) => (
            <Comment
              comment={el.comment}
              group={el.group}
              index={index}
              key={index + el.userName}
              userName={el.userName}
            />
          ))}

          {/*<Comment comment={} />*/}
          {/*<div className="relative ml-[30px] h-[500px] max-w-[420px] flex-1 rounded bg-white px-[50px] py-20 ">*/}
          {/*  <div className="h-[50px] w-[50px] bg-little-quotes-o bg-no-repeat" />*/}
          {/*  <p className="pt-6 text-custom-18/36">*/}
          {/*    “If life gives you lemons, f*ck it, I just want more oranges”*/}
          {/*  </p>*/}
          {/*  <p className="absolute bottom-0 pb-20 text-custom-18/36 font-medium">*/}
          {/*    <span>Dina Korkmazova /</span>*/}
          {/*    <span className="pl-2.5 text-[#777]">Ironhack</span>*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};
export default WhatSay;
