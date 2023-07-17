const Button = ({ text }: { text: string }) => {
  return (
    <button className="ml-2 rounded-2xl bg-light-blue p-4 text-custom-20/26 font-bold text-white">
      {text}
    </button>
  );
};

export default Button;
