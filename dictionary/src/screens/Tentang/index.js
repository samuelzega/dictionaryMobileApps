import React from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Header, Title, Body} from 'native-base';

import styles from './style';

export default function Tentang() {
  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Tentang</Title>
        </Body>
      </Header>
      <Content style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.desc}>
            Kamus Bahasa Ternate Indonesie Inggris adalah aplikasi yang
            menerjemahkan Bahasa Ternate ke Bahasa Indonesia dan ke Bahasa
            Inggris dan sebaliknya. Bahasa Ternate Merupakan Bahasa yang
            digunakan secara umum di Daerah Ternate. Semoga dengan adanya
            aplikasi ini bisa membantu banyak orang yang mau belajar Bahasa
            Ternate.
          </Text>
        </View>
        <View style={[styles.cardContainer, styles.marginTop]}>
          <Text style={styles.devText}>Developer</Text>
          <Text style={styles.devText}>Muhammad Iqbal</Text>
          <Text style={styles.devText}>Iqbalalhaddar44@gmail.com</Text>
        </View>
      </Content>
    </Container>
  );
}
