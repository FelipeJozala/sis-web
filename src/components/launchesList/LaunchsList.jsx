import React from 'react'
import LaunchCard from '../launchCard/launchCard'

const LaunchesList = ({nextLaunches}) => {
    return (
        nextLaunches.map(nextLaunch => {
            return <LaunchCard key={nextLaunch.id} nextLaunch={nextLaunch}/>
    })
    )}

export default LaunchesList