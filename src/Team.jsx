import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11);

    const handleAddTeam = () => {
        const addTeam = team + 1;
        setTeam(addTeam);
    }

    const handleRemoveTeam = () => {
        // way - 1:
        // const removeTeam = team - 1;
        // setTeam(removeTeam);

        // way -2 :
        setTeam(team - 1);
    }

    const teamStyle = {
        border : '2px solid purple',
        margin : '15px',
        padding : '15px',
        borderRadius : '15px'

    }
    return(
        <div style={teamStyle}>
            <h3>Player : {team}</h3>
            <button onClick={handleAddTeam}>Add</button>
            <button onClick={handleRemoveTeam}>Remove</button>
        </div>
    )
}