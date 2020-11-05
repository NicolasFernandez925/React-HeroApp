import React from 'react'
import { HeroresList } from '../heroes/HeroresList'

export const DcScreen = ( { publisher }) => {
    return (
        <div>
          <h2>DC Screen</h2>
          <hr />
          <HeroresList publisher ="DC Comics"/>
        </div>
    )
}
