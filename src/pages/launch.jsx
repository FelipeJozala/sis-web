import React from 'react'
import LaunchesList from '../components/launchesList/LaunchsList'

const launch = ({nextLaunches}) => {

    return (
        <LaunchesList nextLaunches={nextLaunches}/>
    )
}

export default launch

export const getStaticProps = async () => {

    
    const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming');
    const data = await response.json()

    
    return {
        props: {
            nextLaunches: data.results,
        },
        revalidate: 10 
    }
    
};
