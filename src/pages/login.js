// import React from "react";
// import logo2 from "../assets/img/repo.svg";
// import { Input, Form, Spin } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import "../assets/styles/css/login.css";
// import { connect } from 'react-redux';
// import { login } from '../redux/actions/userLogActions';
// import { toogleSpinner } from '../redux/actions/spinnerActions';

// const Login = (props) => {

//   const onFinish = values => {
//     props.toogleSpinner(true);
//     props.login(values);
//   };

//   const onFinishFailed = (errorInfo) => {
//   };

//   return (
//     <Spin className="spin__center" tip="Ahi vamos..." spinning={props.spinnerDisplay}>
//       {/* <EmptyLayout>
//         <Row
//           style={{
//             height: '100vh',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Col md={6} lg={4}>
//             <Card body>
//               <AuthForm
//                 authState={this.props.authState}
//                 onChangeAuthState={this.handleAuthState}
//                 onLogoClick={this.handleLogoClick}
//               />
//             </Card>
//           </Col>
//         </Row>
//       </EmptyLayout> */}
//       <div className="login">
//         <section className="contenedor">
//           <div className="contenedor__logo">
//             <img className="contenedor__logo-img" src={logo2} alt="" />
//           </div>
//           <div className="contenedor__login">
//             <p className="texto texto--label">Bienvenido Administrador</p>
//             <h2 className="titulo titulo--nivel-2 mb-3">Iniciar Sesión</h2>
//             <Form
//               className="form__login"
//               name="basic"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed} 
//               layout="vertical"
//             >
//               <div className="form-group">
//                 <Form.Item
//                   label="Correo Electrónico"
//                   name="email"
//                   className="texto texto--label"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Por favor ingrese un correo electrónico válido",
//                       type: "email",
//                     },
//                   ]}>
//                   <Input className="input-padre" />
//                 </Form.Item>
//               </div>
//               <div className="form-group">
//                 <Form.Item
//                   label="Contraseña"
//                   name="password"
//                   className="texto texto--label"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Por favor ingrese su contraseña",
//                     },
//                   ]}
//                 >
//                   <Input.Password 
//                     className="input-padre"
//                     iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
//                 </Form.Item>
//               </div>
//                 <div className="form-group mt-5">
//                   <button
//                     className="boton boton--rojo btn-block d-flex justify-content-center "
//                     type="submit">
//                     Ingresar
//                   </button>
//                 </div>
//             </Form>
//           </div>
//         </section>
//       </div>
//     </Spin>
//   );
// };


// const mapStateToProps = (state) => {
//   return {
//     spinnerDisplay: state.spinner.display
//   }
// }

// const mapDispatchProps = (dispatch) => {
//   return {
//     login: (values) => {
//       dispatch(login(values));
//     },
//     toogleSpinner: (display) => {
//       dispatch(toogleSpinner(display));
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchProps)(Login);
import React from "react";
import { Content } from 'components/Layout';
import logo2 from "../assets/img/repo.svg";
import { Spin, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "../assets/styles/css/login.css";
import { connect } from 'react-redux';
import { login } from '../redux/actions/userLogActions';
import { toogleSpinner } from '../redux/actions/spinnerActions';
import { Card, Col, Row, Button, CardHeader } from 'reactstrap';

const LoginNew = (props) => {

  const onFinish = values => {
    props.toogleSpinner(true);
    props.login(values);
  };

  const onFinishFailed = (errorInfo) => {
  };

  return (
    <main className="cr-app bg-light">
      <Content fluid>
        <Spin className="spin__center" tip="Ahi vamos..." spinning={props.spinnerDisplay}>
          <Row
            style={{
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Col md={6} lg={4}>
              <CardHeader style={{textAlign: "center", border: "1px solid rgba(0, 0, 0, 0.125)"}}>Bienvenido Administrador</CardHeader>
              <Card body>
                <Form
                  className="form__login"
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed} 
                  layout="vertical"
                >
                  <div className="text-center pb-4">
                    <img
                      src={logo2}
                      className="rounded"
                      style={{ width: 60, height: 60, cursor: 'pointer' }}
                      alt="logo"
                    />
                  </div>
                  <Form.Item
                    label="Correo Electrónico"
                    name="email"
                    className="texto texto--label"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese un correo electrónico válido",
                        type: "email",
                      },
                    ]}>
                    <Input className="input-padre" />
                  </Form.Item>
                  <Form.Item
                    label="Contraseña"
                    name="password"
                    className="texto texto--label"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese su contraseña",
                      },
                    ]}
                  >
                    <Input.Password 
                      className="input-padre"
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                  </Form.Item>
                  <hr />
                  <Button
                    size="lg"
                    className="bg-gradient-theme-left border-0"
                    block
                  >
                    Login
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Spin>
      </Content>
    </main>
  );
};


const mapStateToProps = (state) => {
  return {
    spinnerDisplay: state.spinner.display
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    login: (values) => {
      dispatch(login(values));
    },
    toogleSpinner: (display) => {
      dispatch(toogleSpinner(display));
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(LoginNew);