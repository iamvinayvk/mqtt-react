import logo from './logo.svg';
import './App.css';
import CardS from './Components/CardSubscriber';
import CardP from './Components/CardPublisher';
import React , {useState,useEffect} from 'react';
import mqtt from 'mqtt';
import AddButton from './Components/AddButton';
import Navbar from './Components/Navbar';

function App() {
  const [connectionStatus, setConnectionStatus] = React.useState(false);
  const [messagesTemp, setMessagesTemp] = React.useState('');
  const [messagesHumidity, setMessagesHumidity] = React.useState('');
  
  
  const topicTemp="Temprature";
  const topicHumidity="Humidity";
  const [currentTemp,SetTemp]=useState('');
  const [currentHumidity,SetHumidity]=useState('');
  const handleChangeTemp=(event)=>{
    event.preventDefault();
    SetTemp(event.target.value);
  }
  const handleChangeHumidity=(event)=>{
    event.preventDefault();
    SetHumidity(event.target.value);
  }
  const [UpdateTemp,setUpdateTemp]=useState(false);
  const [UpdateHumidity,setUpdateHumidity]=useState(false);
  const handleClickTemp=()=>{
    console.log("runned handleClickTemp");
    setUpdateTemp(true);
  }
  const handleClickHumidity=()=>{
    console.log("runned handleClickHumidity");
    setUpdateHumidity(true);
  }
  useEffect(() => {
    const client = mqtt.connect('wss://test.mosquitto.org:8081');

            client.on('connect', () => {
              setConnectionStatus(true)
              console.log("connected...");
            if(UpdateTemp)
            {
              client.publish(topicTemp,currentTemp);
              setUpdateTemp(false);
              
            
            }
            if(UpdateHumidity)
            {
              client.publish(topicHumidity,currentHumidity);
              setUpdateHumidity(false);
            
            }
            
              
              
            });
           
              client.subscribe(topicTemp);
              client.subscribe(topicHumidity);
          
            console.log(topicTemp+"tempoutside");
    client.on('message',(topic,message,packet)=>{
      console.log(topicTemp+"temp");
      message=message.toString();
      console.log("Subscriber1:"+message);
      console.log(packet);
     
      if(topic===topicTemp)
      setMessagesTemp(message);
      if(topic===topicHumidity)
      setMessagesHumidity(message);

    
    })
    // console.log(topicHumidity+"topicHumidoutside");
    // client.on('message',(topicHumidity,message,packet)=>{
    //   console.log(topicHumidity+"topicHumid");
    //   console.log(packet)
    //   message=message.toString();
    //   console.log("Subscriber1:"+message);
    //   console.log(message+"message");
    //   console.log(packet)
    //   setMessagesHumidity(message);
    
    // })
  //   client.on('connect',()=>{
  //     client.subscribe(topicTemp);
  //     client.subscribe(topicHumidity);
  // },[])
    
  
    
  });




  // const addDevice=()=>{
  // console.log("device added");
  // SetCard([...Card,IndividualCard]);
  // console.log(Card);  
// }
 
  return (
    <div>
  
 

        {/* <h2 className="button-add">{messages}</h2> */}
        {/* <AddButton click={addDevice}/> */}
        <Navbar/>
        <div className="panel">
          <div className="publisher">
            <h1 className="navbar">Publisher</h1>
        <CardP ChangeTemp={handleChangeTemp} Temp={currentTemp} clickTemp={handleClickTemp}
          ChangeHumidity={handleChangeHumidity} Humidity={currentHumidity} clickHumidity={handleClickHumidity}
        />
        </div>
        {console.log("test messa"+messagesHumidity+" "+messagesTemp)}
        <div className="publisher">
          <h1 className="navbar">Subscriber</h1>
        <CardS cl={false} messaTemp={messagesTemp} messaHumidity={messagesHumidity}/>
        </div>
        </div>
     
   
  
    </div>
  );
}

export default App;
