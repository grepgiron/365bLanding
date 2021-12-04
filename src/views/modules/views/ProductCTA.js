import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState([]);
  const [formValue, setFormValue] = React.useState({
    nombre: '',
    telefono: '',
    dni: '',
    fecha:'',
    comentario: '',
  });

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValue)
  };

  
  const handlePost = (event) => {
    event.preventDefault();
    
    fetch('https://beauty365api.herokuapp.com/api/v1/citas/create', requestOptions)
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
      });
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
            <Box component="form" onSubmit={handlePost} sx={{ maxWidth: 600 }}>
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
                placeholder="Fecha y Hora"
                type="datetime-local"
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
            </Box>
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
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: 100,
              left: -100,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
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
