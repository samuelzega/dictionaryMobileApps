import React from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Body, Title, Header} from 'native-base';
import styles from './style';
import {Button} from '../../components';

export default function Kamus({navigation}) {
  const navigate2ternate = () => {
    navigation.navigate('Ternate');
  };
  const navigate2indo = () => {
    navigation.navigate('Indo');
  };
  const navigate2inggris = () => {
    navigation.navigate('Inggris');
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
          <Button title="Ternate" action={navigate2ternate} />
          <Button title="INDONESIA" action={navigate2indo} />
          <Button title="INGGRIS" action={navigate2inggris} />
        </View>
      </Content>
    </Container>
  );
}
