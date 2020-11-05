import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selector/getHeroById';

export const HeroesScreen = ({history}) => {

   const {heroeId} =  useParams();

   const hero = useMemo(() => getHeroById(heroeId), [heroeId])
 
   if (!hero) {
       return  <Redirect to="/" />
   }
   
   const {
    superhero,
    publisher,
    alter_ego,
    characters,
    first_appearance
   } = hero;

   const handleReturn = () =>{
       
       if(history.length <= 2){
            history.push('/');
       }
       else{
           history.goBack();
       }
      
   }
   
    return (
        <div className="row container-hero-screen">
            <div className="col-md-4">
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`} 
                    alt={superhero}
                    className="img-thumbnail card-columns animate__animated animate__fadeInLeft"  
                />
            </div>
            <div className="col-md-8 ">
                <div className="container-info-hero">
                    <h3>{superhero}</h3>
                    <ul className="list-group ">
                        <li className="item-hero-info"> <span>Alter ego: </span> {alter_ego} </li>
                        <li className="item-hero-info"> <span>Publisher: </span> {publisher} </li>
                        <li className="item-hero-info"> <span>first_appearance: </span> {first_appearance}</li>
                        <li className="item-hero-info"> <span>characters:</span>  {characters}</li>
                    </ul>
                    <button 
                        className="_btn_"
                        onClick={handleReturn}
                    >
                    Return
                </button>
                </div>        
            </div>
        </div>
    )
}
