import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const FavoritesTable = () => {
  const favorites = [
    { name: "Moday's", reason: 'Tragos triples por $4!!!' },
    { name: 'The Kollege Klub', reason: 'Cada fin de semana hay un DJ, y la pista de baile pasa llena!' },
    { name: 'Chasers 2.0', reason: 'Los primeros dos pisos son bares, el tercero es una pista de baile con terraza' },
    { name: 'State Street Brats', reason: 'Mega margaritas (aquel trago enorme que te habia mandado foto es de aqui)' },
    { name: 'The Botanist Social', reason: 'Un poco mas "refinado". Se especializan en tragos con Gin' },
    { name: 'Piano Bar', reason: 'Siempre hay un pianista tocando en vivo (una vez tocó canciones de Nirvana porque se lo pedí)' }
  ];

  return (
    <div style={{ maxWidth: 1000, margin: '2rem auto' }}>
      <Paper
        elevation={6}
        style={{
          backgroundColor: '#1e1e1e',
          color: '#fff',
          padding: '2rem',
          borderRadius: '12px',
        }}
      >
        <Typography variant="body2" align="center" style={{ marginBottom: '1.5rem' }}>
          La naturaleza es muy bonita y todo, pero siendo esta una ciudad universitaria, hay que aprovechar los bares y la vida nocturna. Te dejo una lista de ...
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>
          Mis Bares Favoritos 🍻
        </Typography>

        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#333' }}>
              <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Qué tiene de bueno?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorites.map((place, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: '#fff' }}>{place.name}</TableCell>
                <TableCell style={{ color: '#ddd' }}>{place.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default FavoritesTable;
