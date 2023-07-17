import MobileSVG from '../../../svg/mobile_img.svg';
import SubscribeNow from '../SubscribeNow/SubscribeNow';

const Subscribe: React.FC = () => {
  return (
    <div className="min-h-min bg-custom-orange pb-72 pt-24">
      <div className=" container mx-auto flex">
        <div className="flex-1">
          <div className=" max-w-xl pb-5">
            <p className="pt-6 text-custom-48/60 font-semibold leading-tight text-white">
              Subscribe today and get notified first when we launch Orange app!
            </p>
            <p className="pt-6 text-custom-16/32 font-bold leading-8 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.
            </p>
          </div>
          <div className="pr-20 pt-5">
            <SubscribeNow />
          </div>
        </div>
        <div className="flex-1">
          <img alt="mobile img" src={MobileSVG} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
