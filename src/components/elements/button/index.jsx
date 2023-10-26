const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    // <button
    //   className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
    //   type="submit"
    // >
    //   {children}
    // </button>

    <button
      className={`${classname} hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
