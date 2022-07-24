import React, { useState } from "react";
import { DatePicker, Form, Button, Row, Col } from 'antd';
import "./style.css"

import DesgloseByTipoProceso from "./desgloseByTipoProceso";
import OrdenesTotales from "./ordenesTotales";
import EstadoProcesos from "./estadoProcesos";
import MotivoProceso from "./motivoProceso";
import MontoTotalTipoProceso from "./montoTotalTipoProceso";
import { EstadisticaService } from "../../../servicios/tienda/estadisticaService";
const { RangePicker } = DatePicker;

function Estadisticas() {
  const service = new EstadisticaService("estadistica/fechas");
  const [fechas, setFechas] = useState();
  const searchData = (values) => {
    var newVal = [];
    values.fecha.forEach((el) => {
      newVal.push(el.format("YYYY-MM-DD"));
    })
    setFechas(newVal);
    service.getFechas(newVal).then(({data}) => {
      console.log(data);
    })
  }

  return (
    <div title="Estadística">
      <Form onFinish={searchData}>
        <Form.Item name="fecha">
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <Button style={{ backgroundColor: "#66F1E0"}} htmlType="submit">
            Buscar
          </Button>
        </Form.Item>
      </Form>
      
      <Row cards={true}>
        <Col width={6} sm={4} lg={4}>
          <DesgloseByTipoProceso fechas={fechas} />
        </Col>
        <Col width={6} sm={4} lg={4}>
          <MotivoProceso fechas={fechas} />
        </Col>
        <Col width={6} sm={4} lg={4}>
          <EstadoProcesos fechas={fechas} />
        </Col>
        
        <Col width={6} sm={4} lg={4}>
          <OrdenesTotales fechas={fechas} />
        </Col>
        <Col width={6} sm={4} lg={4}>
          <MontoTotalTipoProceso fechas={fechas} />
        </Col>
      </Row>
    </div>
  );
}

export default Estadisticas;