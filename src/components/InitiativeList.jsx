import { ListItem, ListItemText } from "@mui/material"

const InitiativeList = (props) => {
    const list = props.characters.map((character) => {
        return (
            <ListItem>
                <ListItemText>{character.name}</ListItemText>
            </ListItem>
        )
    })
    return <>{ list }</>
}

export default InitiativeList;