import React, { useEffect, useState } from "react";

import { Card } from 'antd';

import C3Chart from "react-c3js";
import { EstadisticaService } from "../../../servicios/tienda/estadisticaService";

function MotivoProceso({fechas}) {
  const motivoService = new EstadisticaService("estadistica/motivo-procesos");
  const [motivos, setMotivos] = useState();
  const [motivo1, setMotivo1] = useState(0);
  const [motivo2, setMotivo2] = useState(0);
  const [motivo3, setMotivo3] = useState(0);
  const [motivo4, setMotivo4] = useState(0);
  const [motivo5, setMotivo5] = useState(0);

  const getMotivos = () => {
    motivoService.getMotivoProceso(fechas).then(({data})=>{
      
      setMotivos(data);
      setMotivo1(data.motivo1);
      setMotivo2(data.motivo2);
      setMotivo3(data.motivo3);
      setMotivo4(data.motivo4);
      setMotivo5(data.motivo5);
    })
  }

  useEffect(() => {
    getMotivos();
  }, [fechas]);

  return (
    <Card>
      <Card.Header style={{ borderRadius: "46px 46px 0px 0px" }}>
        <Card.Title>Motivo de procesos</Card.Title>
      </Card.Header>
      <Card.Body className="color-repo">
        {
          motivos && 
          <C3Chart
            style={{ height: "24rem" }}
            data={{
              columns: [
                ["data1", motivo1],
                ["data2", motivo2],
                ["data3", motivo3],
                ["data4", motivo4],
                ["data5", motivo5]
              ],
              type: "pie",
              colors: {
                data1: "#A8C8E5",
                data2: "#ECBCBC",
                data3: "#BAEECA",
                data4: "#989CF9",
                data5: "#B6F0EF"
              },
              names: {
                data1: `No me quedó bien (${motivo1})`,
                data2: `No era lo que esperaba (${motivo2})`,
                data3: `Pedí otro producto por error (${motivo3})`,
                data4: `Me entregaron otro producto (${motivo4})`,
                data5: `Producto dañado (${motivo5})`
              },
            }}
            legend={{
              show: true, //hide legend
            }}
            
            padding={{
              bottom: 0,
              top: 0,
            }}
          />
        }
      </Card.Body>
    </Card>
  );
}

export default MotivoProceso;