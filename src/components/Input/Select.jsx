import React from "react";

const Select = (props) => {
  const { onChange, categories } = props;
  return (
    <div className="w-full">
      <select
        className="outline-none w-full p-2 rounded-md border-b-2 border-gray-200 cursor-pointer"
        onChange={onChange}
      >
        <option value="other" className="bg-white">
          Select Category
        </option>
        {categories?.map((cate) => {
          return (
            <option
              key={cate.id}
              value={cate.urlParamName}
              className="text-base border-0 outline-none capitalize bg-white text-headingColor"
            >
              {cate.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
