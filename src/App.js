import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import InitiativeGrid from './components/InitiativeGrid';
import InitiativeList from './components/InitiativeList';
import { CHARACTERS } from './utils/characters';
import { Button, List } from '@mui/material';
import { changeIntiativeOrder } from './utils/changeIntiativeOrder';
import _ from 'lodash';


class App extends Component {
  state = {
    characters: [],
    activeCharacter: {},
    staticCharacterList: []
  }
  componentDidMount() {
    const sortedCombatants = _.orderBy(CHARACTERS, ['initiative'], ['desc'])
    this.setState({
      characters: sortedCombatants,
      staticCharacterList: sortedCombatants,
      activeCharacter: sortedCombatants[0]
    })
  }
  endTurn = () => {
    const reOrderedInitative = changeIntiativeOrder(this.state.characters)
    this.setState({
      characters: reOrderedInitative
    })
  }
  render() {
    const { characters, staticCharacterList, activeCharacter } = this.state
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div class="flex-row">
          <List>
            <InitiativeList
              characters={staticCharacterList}
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
        </div>

        </div>
    )
  }
}

export default App;
