import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import { EstadisticaService } from "../../../servicios/tienda/estadisticaService";

function OrdenesTotales({fechas}) {
  const ordenesService = new EstadisticaService("estadistica/ordenes-totales");
  const efectividadService = new EstadisticaService("estadistica/efectividad-ordenes");
  const [ordenes, setOrdenes] = useState();
  const [efectividad, setEfectividad] = useState();

  const getOrdenes = () => {
    ordenesService.getDesgloseByTipoProceso(fechas).then(({data})=>{
      setOrdenes(data)
    })
  }

  const getEfectividad = () => {
    efectividadService.getEfectividadOrdenes(fechas).then(({data})=>{
      setEfectividad(data)
    })
  }

  useEffect(() => {
    getOrdenes();
    getEfectividad();
  }, [fechas]);

  return (
    <Card>
      <Card.Header style={{ borderRadius: "46px 46px 0px 0px" }}>
        <Card.Title>Órdenes totales</Card.Title>
      </Card.Header>
      <Card.Body style={{ height: "24rem" }}>
        {
          ordenes && efectividad && 
            <>
              <div
                
                color="blue"
                icon="hash"
                header={
                  <h3>
                    {ordenes.cambios} <small>Cambios</small>
                  </h3>
                }
                footer={efectividad.cambios_aceptados + "% Aceptación"}
              />
              <div
                color="blue"
                icon="hash"
                header={
                  <h3>
                    {ordenes.devoluciones} <small>Devoluciones</small>
                  </h3>
                }
                footer={efectividad.devoluciones_aceptadas + "% Aceptación"}
              />
              <div
                color="blue"
                icon="hash"
                header={
                  <h3>
                    {ordenes.servicioTecnico} <small>Servicio Técnico</small>
                  </h3>
                }
              />
            </>
        }
      </Card.Body>
    </Card>
  );
}

export default OrdenesTotales;