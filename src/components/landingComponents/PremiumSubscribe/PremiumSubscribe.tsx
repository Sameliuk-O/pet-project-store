import ORANGE_TREE from './../../../svg/orange_tree.svg';
import { Button } from '../Button';
const PremiumSubscribe: React.FC = () => {
  return (
    <div className=" container m-auto mt-24">
      <div className="flex">
        <div className="flex-1">
          <img alt="orange tree" src={ORANGE_TREE} />
        </div>
        <div className="flex-1 pt-16 text-right">
          <p className=" pb-4 text-custom-48/60 font-bold text-custom-orange">
            It tastes like Premium.
          </p>
          <p className="pb-5 text-custom-34/45 font-bold text-dark-blue">Better than an apple.</p>
          <p className="pb-14 pl-16 pt-5 text-custom-16/32 font-medium text-text-grey-blue">
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
