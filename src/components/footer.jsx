import * as React from 'react';
import { View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const styles = {
    footer: {
        backgroundColor: '#888',
        paddingHorizontal: 25,
        padding: 20,
    },
}

export default function Footer({ title }) {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.footer}>
                <Button title='Sair' onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    )

};