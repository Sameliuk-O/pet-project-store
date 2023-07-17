import { Button } from '../Button';

const SubscribeNow = () => {
  return (
    <form>
      <input
        className="drop-shadow-custom-input mr-2 w-2/3 max-w-[368px] rounded border border-custom-gray px-6 py-4 text-custom-20/26 font-bold not-italic"
        placeholder="Your email address"
        type="text"
      />
      <Button text="Subscribe now" />
    </form>
  );
};

export default SubscribeNow;
