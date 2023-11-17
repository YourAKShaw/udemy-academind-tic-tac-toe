import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const setEditAction = () => {
    setIsEditing(!isEditing);
  };
    let element = <span className="player-name">{name}</span>;

  if (isEditing) {
    element = <input></input>
  }

  return (
    <li>
      <span className="player-info">
        {element}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={setEditAction}>Edit</button>
    </li>
  );
}
