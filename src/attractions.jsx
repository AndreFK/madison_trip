import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';

const attractions = [
  {
    name: 'Wisconsin State Capitol',
    icon: '🏛️',
    description: 'Al capitolio de Wisconsin se mira desde cualquier lugar de la ciudad. Hay tours gratis y siempre hay algo interesante pasando alrededor.',
    image: '/madison_trip/capitol.jpg',
  },
  {
    name: 'Lake Mendota',
    icon: '🌊',
    description: 'Un lago enorme donde se reunen casi todos los estudiantes. Hay una terraza donde venden ice cream, pizza, cerveza, sangrías, y más. Se aprecia mucho el atartecer desde aquí.',
    image: '/madison_trip/mendota.jpg',
  },
  {
    name: 'MMoCA',
    icon: '🖼',
    description: "Madison's Museum of Contemporary Art. Exhibiciones de arte moderno, con entrada gratis",
    image: '/madison_trip/mmoca.jpg',
  },
  {
    name: 'State Street',
    icon: '🛍️',
    description: 'La calle principal de Madison, llena de tiendas, restaurantes y bares. Siempre hay algo que hacer y personajes interesantes que conocer.',
    image: '/madison_trip/state_street.jpg',
  },
  {
    name: 'Madison Arboretum',
    icon: '🌳',
    description: 'Bello lugar para caminar y pasar el rato. Tiene un lago, jardines y senderos para caminar. Ideal para picnics y relajarse.',
    image: '/madison_trip/arboretum.jpg',
  },
  {
    name: 'Chazen Museum of Art',
    icon: '🎨',
    description: 'Museo de arte con una colección muy interesante. Tiene un café donde me gusta ir a estudiar. Entrada gratis.',
    image: '/madison_trip/chazen.jpg',
  },
];

const Attractions = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom color="white">
        Lugares para ir
      </Typography>

      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
      >
        {attractions.map(({ name, icon, description, image }) => (
          <Grid item key={name}>
            <Card
              sx={{
                display: 'flex',
                width: 500,
                backgroundColor: '#1e1e1e',
                color: 'white',
                borderRadius: 2,
                overflow: 'hidden',
              }}
              elevation={4}
            >
                {/* Image on the left */}
                <Box
                sx={{
                  width: 150,
                  flexShrink: 0,
                  overflow: 'hidden', // prevents overflow during scale
                  transition: 'transform 0.3s ease',
                  '&:hover img': {
                    transform: 'scale(1.15)',
                  },
                }}
                >
                    <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                    }}
                    />
                </Box>

              {/* Text content */}
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" gutterBottom>
                  {icon} {name}
                </Typography>
                <Typography variant="body2" color="gray">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Attractions;
