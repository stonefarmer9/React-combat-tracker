import InitiativeCard from './InitiativeCard';

const InitiativeGrid = (props) => {
    const cards = props.characters.map((character) => {
        return (
                <InitiativeCard
                    key={character.id}
                    name={character.name}
                    initiative={character.initiative}
            />
        )
    })
    return <>{ cards }</>
}
export default InitiativeGrid;