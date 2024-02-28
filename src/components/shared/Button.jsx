function Button({ children, ...rest }) {
  return (
    <button
      {...rest}
      className="flex items-center text-white bg-blue-400 disabled:bg-gray-400 rounded-md p-2 font-bold cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
