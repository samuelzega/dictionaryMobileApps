import React from 'react';
import {View, Text, BackHandler} from 'react-native';
import {Container, Content, Header, Body, Title} from 'native-base';
import styles from './style';
import {Button} from '../../components';

export default function Home({navigation}) {
  const navigate2terjemahan = () => {
    navigation.navigate('Kamus');
  };
  const navigate2pengetahuan = () => {
    navigation.navigate('Pengetahuan');
  };
  const navigate2tentang = () => {
    navigation.navigate('Tentang');
  };
  const exitApps = () => {
    BackHandler.exitApp();
    console.log('exitApps');
  };
  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Kamus Bahasa Ternate Indonesia Inggirs</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.container}>
          <Text style={styles.text}>
            Kamus Bahasa Ternate Indonesia Inggirs
          </Text>
          <Button title="TERJEMAHAN" action={navigate2terjemahan} />
          <Button title="PENGETAHUAN" action={navigate2pengetahuan} />
          <Button title="TENTANG" action={navigate2tentang} />
          <Button title="KELUAR" action={exitApps} />
        </View>
      </Content>
    </Container>
  );
}
