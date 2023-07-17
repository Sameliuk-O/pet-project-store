import { SubscribeNow } from '../SubscribeNow';

const SubscribeNotification = () => {
  return (
    <div className="container m-auto pb-72px text-center">
      <p className="text-custom-48/60 font-bold text-custom-orange">
        Subscribe today and get notified first!
      </p>
      <p className="pb-14 text-custom-34/45 font-medium text-custom-gray">
        Product launch in: 12 days
      </p>
      <SubscribeNow />
    </div>
  );
};

export default SubscribeNotification;
