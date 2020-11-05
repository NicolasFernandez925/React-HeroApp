import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SerchScreen } from '../components/search/SerchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-4">
                <Switch >
                    <Route path="/marvel" component={MarvelScreen} />
                    <Route path="/hero/:heroeId" component={ HeroesScreen } />
                    <Route path="/dc" component={DcScreen} />
                    <Route path="/search" component={SerchScreen} />
                    <Redirect to="/marvel" />
                </Switch >
            </div>
        </>
    )
}
