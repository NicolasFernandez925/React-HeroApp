import React from 'react'
import { HeroresList } from '../heroes/HeroresList'

export const MarvelScreen = ( {publisher }) => {
    return (
        <div>
            <h2>Marvel Screen</h2>
            <hr />
            <HeroresList publisher ="Marvel Comics"/>
        </div>
    )
}
