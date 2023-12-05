import * as Location from 'expo-location';

import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Localization = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('A permissão para acessar a localização foi negada');
          return;
        }

        let info = await Location.getCurrentPositionAsync({});
        setLocation(info.coords);
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    })();
  }, []);

  return (
    <View>
      <View style={styles.content}>
        {!location ? (
          <Text>Carregando...</Text>
        ) : (
          <Text>
            Latitude: {location?.latitude}, Longitude: {location?.longitude}
          </Text>
        )}
      </View>

      <View style={styles.containerMap}>
        <MapView style={styles.map}>
          {location && (
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude,
              }}
            />
          )}
        </MapView>
      </View>
    </View>
  );
};

const styles = {
    content: {
        padding: 20,
        alignItems: 'center',
    },
    containerMap:{
        height: '70%',
        width: '100%',
        alingItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: 300,
        width: '100%',
    justifyContent: 'center',
  },
};

export default Localization;
