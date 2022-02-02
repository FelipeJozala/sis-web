import React from 'react'
import { ConfirmationStatus } from './style'

const LaunchStatus = ({nextLaunch}) => {

    let confirmation = null
    
    switch (nextLaunch.status.abbrev) {
        case 'Go':
            confirmation = <ConfirmationStatus status={nextLaunch.status.abbrev}>Confirmado</ConfirmationStatus> 
        break;
        
        case 'Success':
            confirmation = <ConfirmationStatus status={nextLaunch.status.abbrev}>Concluído</ConfirmationStatus> 
        break;

        default:
            confirmation = <ConfirmationStatus status={nextLaunch.status.abbrev}>Aguardando Confirmação</ConfirmationStatus> 
    }

    return (
        <>
          {confirmation}  
        </>
    )
}

export default LaunchStatus