const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="rounded-2xl bg-light-blue p-4 font-bold text-white sm:text-custom-16/26
     md:ml-2 md:text-custom-16/26 lg:text-custom-20/26 "
    >
      {text}
    </button>
  );
};

export default Button;
