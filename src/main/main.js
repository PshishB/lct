import React, { useEffect } from "react";
import { Input } from "antd";
import { Checkbox } from 'antd';

import Map from "../map";
import "./main.css";
import Graph from "../graph";
const vertices = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.52, -0.12]
  ];
  
  const edges = [
    [0, 1],
    [1, 2]
  ];
  
  const startPoint = [51.505, -0.09];
  const endPoint = [51.52, -0.12];

  const data = [['Фригат',new Date(1704031199999),new Date()],['semi',new Date(1804031199999),new Date()]]
  
const Main = ({tab}) => {
    return (
        <main className="app__main main">
            <div className="main__container">
                {tab === 'map' ?  
                <div className="main__flex">
                    <Map vertices={vertices} edges={edges} startPoint={startPoint} endPoint={endPoint}/>
                    <form className="main__form">
                        <Input placeholder="Входные данные" className="main__input" />
                        <Input placeholder="Еще какие то входные данные" className="main__input" />
                        <Checkbox><p>Указывать проходимость льда</p></Checkbox>
                        <button className="main__button" type="submit">Рассчитать</button>
                    </form>
                </div> : <Graph data={data}/>}
            </div>
        </main>
    )
}

export default Main;