import { FooterNavigation } from '../FooterNavigation';

const Footer = () => {
  return (
    <div className="bg-custom-orange pb-10">
      <div className="container m-auto text-center">
        <p className="pb-5 pt-10 text-custom-20/26 font-bold text-white">
          © 2019 Orange All Right Reserved
        </p>
        <FooterNavigation />
      </div>
    </div>
  );
};

export default Footer;
