import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={props.edit ? "todo-form edit-form" : "todo-form"}
    >
      <input
        placeholder={props.edit ? "Update your item" : "Add a todo"}
        value={input}
        onChange={handleChange}
        name="text"
        className={props.edit ? "todo-input edit-input" : "todo-input"}
        // ref={inputRef}
        maxLength={20}
      />

      <button
        onClick={handleSubmit}
        className={props.edit ? " todo-button edit-button" : " todo-button"}
      >
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
}
