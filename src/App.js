import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import InitiativeGrid from './components/InitiativeGrid';
import InitiativeList from './components/InitiativeList';
import { CHARACTERS } from './utils/characters';
import { Button, List } from '@mui/material';
import { changeIntiativeOrder } from './utils/changeIntiativeOrder';
import ConditionSelect from './components/conditionSelect'
import _ from 'lodash';


class App extends Component {
  state = {
    characters: [],
    activeCharacter: {},
    staticCharacterList: [],
  }
  componentDidMount() {
    const sortedCombatants = _.orderBy(CHARACTERS, ['initiative'], ['desc'])
    this.setState({
      characters: sortedCombatants,
      staticCharacterList: sortedCombatants,
      activeCharacter: sortedCombatants[0],
    })
  }
  endTurn = () => {
    const reOrderedInitative = changeIntiativeOrder(this.state.characters);
    const newActiveCharacter = reOrderedInitative[0];
    this.setState({
      characters: reOrderedInitative,
      activeCharacter: newActiveCharacter
    })
  }
  render() {
    const { characters, staticCharacterList, activeCharacter } = this.state
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="flex-row">
          <List>
            <InitiativeList
              characters={staticCharacterList}
              activeCharacter={activeCharacter}
           />
          </List>
          <div>
          <InitiativeGrid
              characters={characters}
            />
            </div>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              this.endTurn()
            }}
          >End turn
          </Button>
          <ConditionSelect/>
        </div>

        </div>
    )
  }
}

export default App;
