import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './styles/pokemonCard.css'

const PokeCard = ({url}) => {

    const [pokemon, setPokemon] = useState()
   
    useEffect(() => {
      axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const clickCard = () => navigate(`/pokedex/${pokemon.id}`)

  return (
    <article onClick={clickCard} className='pokemon-card'>
                    <div className='pokemon-card-bg-img'>
                        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                    <div className='pokemon-card-section'>
                        <h3>{pokemon?.name}</h3>
                        <div className='pokemon-type'>
                            <p>
                                 {pokemon?.types[0]?.type.name ? pokemon.types[0].type.name: 'Unknown'} | 
                                 {pokemon?.types[1]?.type.name ? pokemon.types[1].type.name: 'Unknown'}
                            </p>
                            <small>Type</small>
                        </div>
                        <div className='pokemon-info'>
                            <div className='pokemon-statu'>
                                <small>HP</small>
                                <p>{pokemon?.stats[0].base_stat}</p>
                            </div>
                            <div className='pokemon-statu'>
                                <small>Attack</small>
                                <p>{pokemon?.stats[1].base_stat}</p>
                            </div>
                            <div className='pokemon-statu'>
                                <small>Defense</small>
                                <p>{pokemon?.stats[2].base_stat}</p>
                            </div>
                            <div className='pokemon-statu'>
                                <small>Speed</small>
                                <p>{pokemon?.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
            </article>
  )
}

export default PokeCard