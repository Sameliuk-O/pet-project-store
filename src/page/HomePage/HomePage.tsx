import { useAllProductQuery } from '../../services/ProductServices';

const HomePage = () => {
  const { data } = useAllProductQuery();
  console.log(data);

  return <div>1</div>;
};

export default HomePage;
