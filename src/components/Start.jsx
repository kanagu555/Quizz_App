import { useRef } from "react";

const Start = ({ setUserName }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        type="text"
        placeholder="Enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button type="button" className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
