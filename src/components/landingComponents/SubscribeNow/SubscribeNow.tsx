import { Button } from '../Button';

const SubscribeNow = () => {
  return (
    <form>
      <input
        className="drop-shadow-custom-input w-2/3 rounded border border-custom-gray px-6 py-4 font-bold not-italic
        mobile:mb-7 mobile:max-w-[335px] sm:max-w-[250px] sm:text-custom-16/26
        md:mb-7 md:text-custom-16/26 lg:mb-0 lg:mr-2 lg:max-w-[300px] lg:text-custom-20/26"
        placeholder="Your email address"
        type="text"
      />
      <Button text="Subscribe now" />
    </form>
  );
};

export default SubscribeNow;
