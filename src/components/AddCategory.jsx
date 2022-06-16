import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <=1) return;
    // setCategory((category) => [inputValue,...category] )
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search For a GIF"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};
