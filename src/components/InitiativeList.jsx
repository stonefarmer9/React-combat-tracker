import { ListItem, ListItemText } from "@mui/material"

const highLightActive = (characterID, ActiveCharacterID) => {
    let colour = 'white';
    if (characterID === ActiveCharacterID) {
        colour = 'lightBlue'
    }
    return {
        backgroundColor: colour
    }
        
}
const InitiativeList = (props) => {
    const list = props.characters.map((character) => {
        return (
            <ListItem style={highLightActive(character.id, props.activeCharacter.id)}>
                <ListItemText >{character.name}</ListItemText>
            </ListItem>
        )
    })
    return <>{ list }</>
}

export default InitiativeList;