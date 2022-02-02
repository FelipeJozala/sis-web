import React from 'react'
import { Card, CardImage, CardInfo, ImgContainner, ConfirmationStatus, MissionTittle, InfoList } from './style'
import Moment from 'react-moment'
import 'moment/locale/pt-br'
import LaunchStatus from '../launchStatus/launchStatus'

const LaunchCard = ({nextLaunch}) => {
    return (
        <Card>
            <ImgContainner>
                {nextLaunch.image ? <CardImage src={nextLaunch.image} /> : <CardImage src='../../assets/LaunchAlt.png'  />}
                <LaunchStatus nextLaunch={nextLaunch}/>
            </ImgContainner>
            <CardInfo>
                <MissionTittle>{nextLaunch.name}</MissionTittle>
                <InfoList>
                    <li>Lançador: {nextLaunch.launch_service_provider.name}</li>
                    <li>Lançamento em: <Moment format='DD/MM/YYYY' date={nextLaunch.net}/>
                    </li>
                    <li>
                      Horário de Brasília:  <Moment local format='HH:mm' date={nextLaunch.net}/>
                    </li>
                </InfoList>
            </CardInfo>
        </Card>
    )
}

export default LaunchCard
