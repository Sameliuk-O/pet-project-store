import ORANGE_PHONE from './../../../svg/orange_phone.svg';
import ORANGE_TREE from './../../../svg/orange_tree.svg';
import { Button } from '../Button';
const PremiumSubscribe: React.FC = () => {
  return (
    <div className=" container mx-auto mt-32">
      <div className="flex mobile:flex-col md:pt-20 lg:flex-row">
        <img
          alt="orange tree"
          className="text-center mobile:hidden md:flex md:max-h-500px md:flex-1 md:pr-10 lg:max-h-660px"
          src={ORANGE_TREE}
        />
        <img
          alt="orange phone"
          className=" mobile:block mobile:w-[296px] mobile:pb-60px md:hidden"
          src={ORANGE_PHONE}
        />
        <div className="flex-1 mobile:pb-118px mobile:text-center md:pr-10 md:pt-16 lg:pb-274px lg:text-right">
          <p className=" font-bold text-custom-orange mobile:text-custom-30/40   lg:pb-4 lg:text-custom-48/60">
            It tastes like Premium.
          </p>
          <p className="pb-5 font-bold text-dark-blue mobile:text-custom-26/45 md:text-custom-34/45">
            Better than an apple.
          </p>
          <p className=" text-custom-16/32 font-medium text-text-grey-blue mobile:pb-30px mobile:pt-2 sm:pl-10 md:pl-7 lg:pb-40px lg:pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <Button text="Subscribe now" />
        </div>
      </div>
    </div>
  );
};

export default PremiumSubscribe;
