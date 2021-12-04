import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://i.ibb.co/J70NkJg/logo.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Siempre es importante sentirte bella
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 }, maxWidth: 'sm' }}
      >
        Satisfacer las necesidades de belleza de nuestros clientes mediante servicios de alta calidad.
        Brindado por un personal calificado que inspira confianza, para darte la mejor experiencia y superar
        tus expectativas.
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Descubre la experiencia
      </Typography>
    </ProductHeroLayout>
  );
}
