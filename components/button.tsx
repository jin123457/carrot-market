interface ButtonProps {
  title: string;
}
const Button = ({ title }: ButtonProps) => {
  return (
    <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
      {title}
    </button>
  );
};

export default Button;
