import Shopping from '../../svg/shopping.svg';

interface ICounter {
  counter: number;
}

const ShoppingBox: React.FC<ICounter> = ({ counter }) => {
  return (
    <div>
      <img alt="shopping" src={Shopping} />
      <span>{counter ? counter : 0}</span>
    </div>
  );
};

export default ShoppingBox;
