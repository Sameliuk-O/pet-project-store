import { Navigation } from '../Navigation';

const Header: React.FC = () => {
  return (
    <div className="bg-custom-orange">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between py-9">
          <h1 className="font-sans text-2xl font-black uppercase leading-8 text-white">orange</h1>
          <div className="flex-row-reverse space-x-4 space-x-reverse">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
