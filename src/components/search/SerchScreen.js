import queryString from 'query-string';
import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selector/getHeroByName';
import { HeroCard } from '../heroes/HeroCard';

export const SerchScreen = ({history}) => {

    const location =  useLocation();
    const {q = ''} = queryString.parse(location.search)

    const [ values, handleInputChange ] = useForm({
        serchText : q
    })

    const {serchText} = values

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`?q=${serchText}`);      
    }

   const heroesFilter =  useMemo(() => getHeroByName(q), [q]);

    return (
        <div>
            <div className="row">
                <div className="col-md-5">
                    <h2>Search form</h2>
                    <hr />
                    <form onClick={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            name="serchText"
                            value={serchText}
                            onChange={handleInputChange}
                            autoComplete= "off"
                        />
                        <button 
                            type="submit"
                            className="_btn_ mt-4 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-md-7">
                    
                <h2>Results</h2>
                <hr />

                {(q === '') &&  <div className="alert alert-info">
                                    Search a hero
                                </div>}

                {
                    (q !== '' &&  heroesFilter.length === 0) 
                            &&  
                            <div className="alert alert-danger">
                                    There is no a hero with {q}
                            </div>
                }

                {
                    heroesFilter.map( hero => (
                        <HeroCard 
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }

            </div>
            </div>
   
        </div>
    )
}
