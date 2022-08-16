import {React, useState} from 'react'

const TemperatureDisplay = (props) => {
    const [temperature, setTemperature] = useState(25);
    const [temperatureColor, setTemperatureColor] = useState('normal')

    const handleTempIncrease = () => {
        if (temperature === 35) return;
    
        const newTemperature = temperature + 1;
    
        if (newTemperature >= 30) {
          setTemperatureColor('hot');
        }
    
        setTemperature(newTemperature);
      }
    
      const handleTempDecrease = () => {
        if (temperature === 20) return;
    
        const newTemperature = temperature - 1;
    
        if (newTemperature < 30) {
          setTemperatureColor('normal');
        }
    
        setTemperature(newTemperature);
      }

    return (
        <>
            <div className='temperature-container'>
            <div className={props.powerStatus.status ? `temperature ${temperatureColor}` : 'temperature'}>
                {props.powerStatus.status ? `${temperature}°C` : null}
                </div>
            </div>
            <div className='temperature-buttons-container'>
            <button onClick={handleTempIncrease} className='temperature-btn' disabled={!props.powerStatus.status}>+</button>
            <button onClick={handleTempDecrease} className='temperature-btn' disabled={!props.powerStatus.status}>-</button>
            </div>
        </>
    )
}

export default TemperatureDisplay