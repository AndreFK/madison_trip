import { Paper, Typography } from '@mui/material';

const IntroCard = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '3rem auto', padding: '0 1rem' }}>
      <Paper
        elevation={6}
        style={{
          backgroundColor: '#1e1e1e',
          color: '#f5f5f5',
          padding: '2rem',
          borderRadius: '12px',
        }}
      >
        {/* Paragraph */}
        <Typography variant="body1" style={{ fontSize: '1.2rem', marginBottom: '2rem'}}>
          Madison! Mi hogar por el último año. Una ciudad universitaria con una mezcla perfecta de naturaleza y vida urbana. Cituada justo en medio de dos hermosos lagos 
          (que hacen que el frio se ponga perro a inicios de año), está lleno de hermosos paisajes con eventos ocurriendo alrededor de todo el año. Aqui espero mostrate un poco de lo que hay por hacer y ver, y que te animés a visitarme.
          Las actividades que podemos hacer dependen de la fecha en que vengás, así que solo puse cosas que se pueden hacer en cualquier época del año. Pero si nos organizamos bien, puedo planear mas cosas que hacer para que podás ir a eventos como 
          el primer juego de la temporada de los Badgers, homecoming, el festival de Jazz, o incluso Halloween! Yo voy a ser tu guía turístico personal, así que no te preocupés por nada y cualquier pregunta que tengás no dudés en hacerla.
        </Typography>


        {/* Map */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            title="Google Map Madison"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLXV_dqXRZPYRWOnlkMIOvvhVDNvHE1bQ&q=Memoral+Union+Terrace,+Madison,+WI"
            style={{
              width: '100%',
              maxWidth: '900px',
              height: '450px',
              border: 0,
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Paper>
    </div>
  );
};

export default IntroCard;
