import React from "react";

const Input = (props) => {
  const { type = "text", value, placeholder, icon, onChange } = props;

  return (
    <div className="border-b border-gray-300 p-2 flex items-center gap-2 w-full">
      {icon}
      <input
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full h-full outline-none border-none  text-textColor bg-transparent placeholder:text-gray-400"
      />
    </div>
  );
};

export default Input;
