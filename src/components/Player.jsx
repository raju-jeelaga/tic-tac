import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
    }
    let Playername = <span className="player-name">{name}</span>;

    if (isEditing) {
        Playername = <input type="text" required value={name} />;
    }

    return (
        <li>
            <span className="player">
              {Playername}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
          </li>
    )
}