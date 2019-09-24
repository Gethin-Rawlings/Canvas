import React, { useState, useEffect }  from 'react';
import { postChartConfig ,getChartConfig, getChartData } from './apiCalls';
import { Rnd } from 'react-rnd';

function Lists (props) {

    const [calls, setCalls] = useState([]);
    const [requestFailed ,setRequestFailed] = useState(false);
    const url = props.config
    const [size, setSize ] = useState({ width: "500px", height: "250px"});
    const [position, setPosition] = useState({x:512, y: 262} );
    const [moved, setMoved] = useState(false);
  useEffect( ()=> {
    const postConfig = async() => {
      try {
          if (moved){
            const config = {}
            config.chart=props.name;
            config.width=size.width;
            config.height=size.height;
            config.x=position.x;
            config.y=position.y;
            await postChartConfig(url,config)
          }
      } catch(error){console.log(error)}
    }
    postConfig(size, position)

  },[moved, position, size, props.name, url]);

  useEffect( () => {
    const getConfig = async() => {
      try {
        const data = await getChartConfig(url, props.name);
        setMoved(false);
        setPosition({x:data.x, y:data.y});
        setSize({width:data.width, height:data.height});
      } catch(error){
        console.log(error);
      }
    }  
    getConfig();
  },[props.name, url]);
    
    useEffect( ()=> {
      const getData = async() =>  {
        try {
          const data = await getChartData(props.url)
          setCalls(data)
        } catch (error) {setRequestFailed(true)
        }
      }
        getData();
        let interval = setInterval(getData, 60000);
        return function cleanup() {
            clearInterval(interval);
        }
    },[props.url])

    const table = (calls) => {
        let table = [];
        for (let i=0;i<calls.length;i++){
            let children = [];
            let row = Object.values(calls[i]);
            row.map(data => children.push(<td id={i} key={data}>{data}</td>))
            table.push(<tr key={row}>{children}</tr>)
        }
        return table
    }

      if (requestFailed) return <p>Failed!</p>

      if (calls) {
        return (
         <Rnd 
            className='chart2'
            size={size} 
            position={position}
            onDragStop={(e, d) => { setMoved(true); setPosition({ x: d.x, y: d.y})}}
            onResizeStop={(e, direction, ref, delta, position) => {
            setMoved(true);
            setSize({
                width: ref.style.width,
                height: ref.style.height
            });
        }}>
        <div>
            <h4>{props.title}</h4>
                <table>
                    <tbody>
                        {table(calls)}
                    </tbody> 
                </table>
            </div>
      </Rnd>
            
            )
      } 
}
export default Lists;