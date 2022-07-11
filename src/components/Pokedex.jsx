import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Form from './Form'
import PokeCard from './PokeCard'

const Pokedex = () => {

    const nameUser = useSelector(state => state.nameUser)

    const [pokemons, setPokemons] = useState()
    const [pokeSearch, setPokeSearch] = useState()
    const [filterPokemon, setFilterPokemon] = useState()
    const [typeList, setTypeList] = useState()
    const [filterType, setFilterType] = useState('All Pokemons')
 
    useEffect(() => {
      if(filterType === 'All Pokemons'){
        const URL_Pokemons = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
        axios.get(URL_Pokemons)
          .then(res => setPokemons(res.data.results))
          .catch(err => console.log(err))
      }else {
        const URL = `https://pokeapi.co/api/v2/type/${filterType}`
        axios.get(URL)
        .then(res => {
          const array =  res.data.pokemon.map(e => e.pokemon)
          setPokemons(array)
        })
        .catch(err => console.log(err))
      }  
    }, [filterType])

    useEffect(() => {
      const URL = 'https://pokeapi.co/api/v2/type/'
      axios.get(URL)
        .then(res => setTypeList(res.data.results))
        .catch(err => console.log(err))
    }, [])
    

    useEffect(() => {
      if(pokemons){
      setFilterPokemon(pokemons.filter(e => e.name.includes(pokeSearch.toLowerCase())))
      }
    }, [pokeSearch])
    
    /*********Paginacion*********/
    const [page, setPage] = useState(1)
    const itemsPokemon = 12
    const lastIndex = page * itemsPokemon
    const firstIndex = lastIndex - itemsPokemon
    const pokemonPage = pokemons?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons?.length/itemsPokemon)
    const pagesNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        if(i > page - 4 && i < page + 4){
            pagesNumbers.push(i);
        }
    }
    /*****************************/

  return (
    <div className='pokedexScreen'>
      <div className='title-name'>
        <h1>Pokedex</h1>
        <h2>Hi {nameUser}, welcome to the pokedex</h2>
        <p>Here you can find your favorite pokemon!</p>
        <Form setPokeSearch={setPokeSearch} typeList={typeList} setFilterType={setFilterType}/>
      </div> 
        <div className='card-container'>
        {
          filterPokemon?
            filterPokemon?.map(pokemon => (
              <PokeCard
                key={pokemon.url}
                url={pokemon.url}
                />
            ))
            :
            pokemonPage?.map(pokemon => (
                <PokeCard
                  key={pokemon.url}
                  url={pokemon.url}
                  />
            ))
        }
        </div>
        
        <div className='btn-pages'>
                <button 
                    onClick={()=> setPage(page -1)}
                    disabled={page <= 1} 
                >
                    <i className="fa-solid fa-circle-arrow-left"></i>
                </button>

                {pagesNumbers.map(page =>(
                        <button 
                            key={page}
                            onClick={()=> setPage(page)}
                        >
                            {page}
                        </button>
                    ))}

                <button 
                    onClick={()=> setPage(page +1)}
                    disabled={page >= totalPages}
                >
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>
    </div>
  )
}

export default Pokedex