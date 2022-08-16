import React from 'react'

const PowerBtn = (props) => {
    const handlePowerStatus = () => {
        if (props.powerStatus.status) {
          props.setPowerStatus({
            status: false,
            statusName: 'On',
            statusColor: 'power-btn-on'
          })
        } else {
            props.setPowerStatus({
              status: true,
              statusName: 'Off',
              statusColor: 'power-btn-off'
            })
    
        }
      }

    return (
        <button onClick={handlePowerStatus} className={`power-btn ${props.powerStatus.statusColor}`}>{props.powerStatus.statusName}</button>
    )
}

export default PowerBtn