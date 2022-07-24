import React, { useEffect, useState } from "react";
import { Card } from 'antd';

import C3Chart from "react-c3js";
import { EstadisticaService } from "../../../servicios/tienda/estadisticaService";

function EstadoProcesos({fechas}) {
  const estadoService = new EstadisticaService("estadistica/estado-procesos");
  const [procesos, setProcesos] = useState();
  const [proceso, setProceso] = useState(0);
  const [aceptado, setAceptado] = useState(0);
  const [rechazado, setRechazado] = useState(0);

  const getEstados = () => {
    estadoService.getEstadoProcesos(fechas).then(({data})=>{
      console.log(data);
      setProcesos(data);
      setProceso(data.proceso);
      setAceptado(data.aceptado);
      setRechazado(data.rechazado);
    })
  }

  useEffect(() => {
    getEstados();
  }, [fechas]);

  return (
    <Card>
      <Card.Header style={{ borderRadius: "46px 46px 0px 0px" }}>
        <Card.Title>Estado de procesos</Card.Title>
      </Card.Header>
      <Card.Body className="color-repo">
        {
          procesos && 
            <C3Chart
              style={{ height: "24rem" }}
              data={{
                columns: [
                  ["data1", proceso],
                  ["data2", aceptado],
                  ["data3", rechazado]
                ],
                type: "pie",
                colors: {
                  data1: "#989CF9",
                  data2: "#ECBCBC",
                  data3: "#BAEECA"
                },
                names: {
                  data1: `Proceso (${proceso})`,
                  data2: `Aceptado (${aceptado})`,
                  data3: `Rechazado (${rechazado})`
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

export default EstadoProcesos;