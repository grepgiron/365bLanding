import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import axios from 'axios';
import qs from 'qs';

import {
  Form,
  Row,
  Col,
  ButtonToolbar,
  Input
} from 'rsuite';

import 'rsuite/dist/rsuite.css'

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const TextField = ({ name, label, value, accepter, ...rest }) => (
  <Form.Group controlId={`${name}-4`}>
    <Form.ControlLabel style={{ color: '#575757', fontSize: '16px', fontFamily: 'sans-serif', lineHeight: '1.334'}}>{label}</Form.ControlLabel>
    <Form.Control name={name} accepter={accepter} {...rest} />
  </Form.Group>
);

function ProductCTA() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState([]);
  const [formValue, setFormValue] = React.useState({
    nombre: '',
    telefono: '',
    dni: '',
    fecha:'',
    hora:'',
    comentario: '',
  });

  
  const handlePost = async() => {
    
    try {
      const response = await axios.post('https://beauty365api.herokuapp.com/api/v1/citas/create',
      qs.stringify(formValue),
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        if( response.status === 200){
          setStatus(response);
          console.log(response);
          setOpen(true);
        } else {
          setStatus(response);
          console.log(response);
          setOpen(true);
        }
      })
    } catch (error) {
      console.log(error);
    }  


    /* fetch('https://beauty365api.herokuapp.com/api/v1/citas/create', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setStatus(data);
        setFormValue({});
        setOpen(true);
      })
      .catch(error => {
        console.error('Error:', error);
        setStatus(error);
      }); */
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };


  const handleClose = () => {
    window.location.reload(false);
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={16} md={8} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 4,
              px: 2,
            }}
          >
            <Form
              onSubmit={handlePost}
              onChange={setFormValue}
              formValue={formValue}
            >
              {console.log(formValue)}
              <Row>
                <Col xs={12}>
                  <TextField name="nombre" label="Nombre" />
                  <TextField name="email" label="Email" />
                </Col>
                  <Col xs={12}>
                    <TextField name="telefono" label="Telefono" />
                    <TextField name="dni" label="DNI" />
                  </Col>
              </Row>
              <Row style={{ marginTop: 20, marginBottom: 20}}>
                <Col xs={12} md={12}>
                  <TextField name="fecha" label="Fecha y Hora" type="date"/>
                  <TextField name="hora" label="Fecha y Hora" type="time"/>
                </Col>
                <Col xs={12} md={12}>
                  <TextField name="comentario" label="Comentario" accepter={Textarea} row={12}/>
                </Col>
              </Row>
              
              <Form.Group>
                <ButtonToolbar>
                  <Button onClick={handlePost}>Agregar</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>



            {/* <Box component="form" onSubmit={handlePost} sx={{ maxWidth: 600 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Reserva tu cita
              </Typography>
              <TextField
                noBorder
                name="nombre"
                onChange={(event) => setFormValue({ ...formValue, nombre: event.target.value })}
                placeholder="Nombre"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <TextField
                noBorder
                name="telefono"
                placeholder="Telefono"
                onChange={(event) => setFormValue({ ...formValue, telefono: event.target.value })}
                variant="standard"
                sx={{ width: '45%', mt: 3, mb: 2, mr:1 }}
              />
              <TextField
                noBorder
                name="dni"
                onChange={(event) => setFormValue({ ...formValue, dni: event.target.value })}
                placeholder="Dni"
                variant="standard"
                sx={{ width: '53%', mt: 3, mb: 2 }}
              />
              <TextField
                noBorder
                name="email"
                onChange={(event) => setFormValue({ ...formValue, email: event.target.value })}
                placeholder="Tu Email"
                variant="standard"
                sx={{ width: '45%', mt: 3, mb: 2, mr: 1 }}
              />
              <TextField
                noBorder
                name="fecha"
                onChange={(event) => setFormValue({ ...formValue, fecha: event.target.value })}
                placeholder="Fecha"
                type="date"
                variant="standard"
                sx={{ width: '53%', mt: 3, mb: 2 }}
              />
              <TextField
                noBorder
                name="hora"
                onChange={(event) => setFormValue({ ...formValue, hora: event.target.value })}
                placeholder="Hora"
                type="time"
                variant="standard"
                sx={{ width: '53%', mt: 3, mb: 2 }}
              />
              
              <TextField
                noBorder
                name="comentario"
                onChange={(event) => setFormValue({ ...formValue, comentario: event.target.value })}
                placeholder="Comentario"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Reservar
              </Button>
            </Box> */}
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          md={4}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -1,
              left: -1,
              right: 12,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://i.ibb.co/M5FxW9k/image.png"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: 22,
              left: -126,
              right: 0,
              bottom: 0,
              
              maxWidth: 488,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message={status.message}
      />
    </Container>
  );
}

export default ProductCTA;
