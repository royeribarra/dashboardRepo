import React, { useEffect, useState } from "react";
import { Card } from 'antd';

import C3Chart from "react-c3js";
import { EstadisticaService } from "../../../servicios/tienda/estadisticaService";

function DesgloseByTipoProceso({fechas}) {
  console.log(fechas)
  const service = new EstadisticaService("estadistica/desglose-tipo-proceso");
  const [data, setData] = useState();
  const [estandar, setEstandar] = useState(0);
  const [express, setExpress] = useState(0);
  const [devolucion, setDevolucion] = useState(0);
  const [servicioTecnico, setServicioTecnico] = useState(0);

  const getData = () => {
    service.getDesgloseByTipoProceso(fechas).then(({data})=>{
      setData(data);
      setEstandar(data.estandar);
      setExpress(data.express);
      setDevolucion(data.devolucion);
      setServicioTecnico(data.servicioTecnico);
    })
  }

  useEffect(() => {
    getData();
  }, [fechas]);
  
  return (
    <Card>
      <Card.Header style={{ borderRadius: "46px 46px 0px 0px" }}>
        <Card.Title>Desglose por tipo de proceso</Card.Title>
      </Card.Header>
      <Card.Body className="color-repo">
        {
          data && 
          <C3Chart
            style={{ height: "24rem" }}
            data={{
              columns: [
                ["data1", estandar],
                ["data2", express],
                ["data3", devolucion],
                ["data4", servicioTecnico],
              ],
              type: "pie",
              colors: {
                data1: "#77F3E2",
                data2: "#989CF9",
                data3: "#E7E9FF",
                data4: "#E7E9FF",
              },
              names: {
                data1: `Estándar (${estandar})`,
                data2: `Express (${express})`,
                data3: `Devolución (${devolucion})`,
                data4: `Servicio Técnico (${servicioTecnico})`
              },
            }}
            legend={{
              show: true,//hide legend
            }}
            color = {{

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

export default DesgloseByTipoProceso;