import {useState} from 'react';
import TemperatureDisplay from './TemperatureDisplay';
import PowerBtn from './PowerBtn';

const AirConditioner = () => {
    const [powerStatus, setPowerStatus] = useState({
      status: false,
      statusName: 'On',
      statusColor: 'power-btn-on'
    })
  
    
  
    return (
      <div className="container">
        <h2>Air conditioner</h2>
        <TemperatureDisplay powerStatus={powerStatus}/>
        <PowerBtn powerStatus={powerStatus} setPowerStatus={setPowerStatus} />
      </div>
    )
}

export default AirConditioner