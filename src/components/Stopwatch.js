import React,{useState} from 'react';
import {FaStopwatch} from 'react-icons/fa';
function Stopwatch() {


  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (


  
    <section>
          <div className="bg-gray-500/50 p-2 w-96   mx-auto rounded-xl  overflow-hidden mt-20 " >
            <div className='text-gray-400 w-full justify-center font-bold text-3xl h-16 flex items-center space-x-2 pl-1'>
              <FaStopwatch/>
              <p> Stopwatch</p>
              
            </div>
            <div className=' mb-5 items-center font-bold text-3xl ml-11'> 
              <span className=' ml-20'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span >{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span >{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className='ml-20 items-center' > 
            {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)} className= 'p-3  w-20 bg-purple-500/50 rounded-lg ml-14  '>Start</button>
            )}
            {timerOn && 
            <button onClick={() => setTimerOn(false)}className= 'p-3 w-20 bg-purple-500/50 ml-14 rounded-lg '>Pause</button>
            }
            {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)} className= 'p-3 w-20 bg-purple-500/50 ml-6 rounded-lg   '>Reset</button>
            )}
            {!timerOn && time > 0 && (
            <button onClick={() => setTimerOn(true)} 
            className= 'p-3 w-20 bg-purple-500/50 ml-2 rounded-lg    '>Resume</button>
            )}

            </div>

          </div>


    </section>

  )
}

export default Stopwatch