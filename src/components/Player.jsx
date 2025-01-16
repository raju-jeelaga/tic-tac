import { useState } from "react";

export default function Player({IntialName, symbol, isActive, onChangeName}) {
    const [PlayerName, setPlayerName] = useState(IntialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
        //setIsEditing(true);
        if(isEditing){
            onChangeName(symbol, PlayerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let EditablePlayerName = <span className="player-name">{PlayerName}</span>;
    //let ButtonCaption = 'Edit';

    if (isEditing) {
        EditablePlayerName = <input type="text" required value={PlayerName} onChange={handleChange} />;
        //ButtonCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {EditablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}
