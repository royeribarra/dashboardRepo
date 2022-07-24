import React, { useEffect, useState } from "react";
import { Card } from 'antd';

import { EstadisticaService } from "../../../servicios/tienda/estadisticaService";

function MontoTotalTipoProceso({fechas}) {
  const montoService = new EstadisticaService("estadistica/monto-total-tipo-proceso");
  const [montos, setMontos] = useState();

  const getMontos = () => {
    montoService.getMontoTotalTipoProceso(fechas).then(({data})=>{
      console.log(data);
      setMontos(data)
    })
  }

  useEffect(() => {
    getMontos();
  }, [fechas]);

  return (
    <Card>
      <Card.Header style={{ borderRadius: "46px 46px 0px 0px" }}>
        <Card.Title>Monto Total por Tipo de Proceso (S/.)</Card.Title>
      </Card.Header>
      <Card.Body>
        {
          montos && 
            <>
              <div
                color="blue"
                icon="dollar-sign"
                header={
                  <h3>
                    <small>Monto Total Productos Devueltos: </small> {montos.total_cambios}
                  </h3>
                }
                footer={""}
              />
              <div
                color="blue"
                icon="dollar-sign"
                header={
                  <h3>
                    <small>Monto Total Productos Cambiados: </small> {montos.total_devoluciones}
                  </h3>
                }
                footer={""}
              />
              <div
                color="blue"
                icon="dollar-sign"
                header={
                  <h3>
                    <small>Monto Total de Venta Adicional: </small> {montos.total_nuevos_productos}
                  </h3>
                }
                footer={montos.upselling + "% Upselling"  }
              />
            </>
        }
      </Card.Body>
    </Card>
  );
}

export default MontoTotalTipoProceso;