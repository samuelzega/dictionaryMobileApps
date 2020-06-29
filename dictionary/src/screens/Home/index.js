import React from 'react';
import {View, Text} from 'react-native';
import {Root, Container, Content, Header, Body, Title} from 'native-base';
import styles from './style';
import {Button} from '../../components';

export default function Home() {
  return (
    <Root>
      <Container>
        <Header>
          <Body>
            <Title>Kamus Bahasa Hitu Indonesia Inggirs</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.container}>
            <Text style={styles.text}>Kamus Bahasa Hitu Indonesia Inggirs</Text>
            <Button />
          </View>
        </Content>
      </Container>
    </Root>
  );
}
