import styled from "styled-components";
import useCreateTeam from "../../hooks/useCreateTeam";
import { useState } from "react";
import deletePokemons from "../../hooks/deletePokemon"
import updatePokemonEntry from "../../api/updatePokemonEntry"
const PokemonWrapper = styled.div`
  background-color: blue;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  text-align: center;
  width: 275px;
  height: 70px;
  margin-bottom: 50px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;
  p {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const DeleteButton = styled.button`
  color: #fff;
  background-color: red;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: red;
  border-style: solid;
  &:hover {
    cursor: pointer;
  }
`;

const Select = styled.button`


&:hover {
  cursor: pointer;
}
`;

export default function PokemonEntry(props) {
  const [isSelected, setIsSelected] = useState(false)

  const { 
    teamPokemon,
    selectedId,
    setSelectedId, } = useCreateTeam()

    function inTeam(id){
      id = selectedId
      console.log(selectedId)

      teamPokemon(id)
      }

    return (
        <ScoreWrapper>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.type}</p>
            <p>{props.region}</p>
            <button onClick={() => {
              console.log("hit selected")
                setIsSelected(true)
                setSelectedId(props._id)
                console.log(selectedId)
                inTeam()
            }}> select </button>
            <button onClick={() => {
              console.log('deselect hit')
              setIsSelected(false)
            }}> deselect </button>
        </ScoreWrapper>
    )
}



