import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styles from './Map.module.css';

const position = {
  lat: -23.53597565205839,
  lng: -46.909311405438245,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA0BzaHGvLoz1CEtwglaeJJsosHmq3GiYU',
  });

  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: 'Igreja',
                className: 'map-marker',
              },
            }}
          />
        </GoogleMap>
      ) : (
        <div>Carregando o mapa...</div>
      )}
    </div>
  );
}

export default Map;
