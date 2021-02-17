import React from 'react'

const Foooter=()=>{
    return(
        <div className="footer">
            <ol>
                <li>
                    This project just describe the structure of mqtt protocol.
                </li>
                <li>
                    It uses mqttjs and test.mosquitto.org as broker and MQTT over Websockets.
                </li>
                <li>
                    We can extend this project by using subscribers as physical devices and publisher as User or Publisher as Sensors and Subscribers as different data of these sensors. 
                </li>
            </ol>
        </div>
    )
}

export default Foooter;