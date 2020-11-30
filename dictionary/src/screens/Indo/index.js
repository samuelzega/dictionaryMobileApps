import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Item,
  Label,
  Input,
} from 'native-base';
import styles from './style';
import {Button} from '../../components';
import kamus from '../../data/kamus';

export default function Home({navigation}) {
  const [indo, setIndo] = useState('');
  const [hitu, setHitu] = useState('');
  const [inggris, setInggris] = useState('');
  const translate = () => {
    let found = kamus.find((element) => element.indo === indo);
    setHitu(found ? found.ternate : `${indo} tidak terdaftar dalam kamus`);
    setInggris(found ? found.inggris : `${indo} tidak terdaftar dalam kamus`);
  };
  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Indonesia</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.container}>
          <Item floatingLabel>
            <Label>Indonesia</Label>
            <Input onChangeText={setIndo} value={indo} />
          </Item>
          <Button title="ARTI" action={translate} />
          <Item style={styles.disabledInput} stackedLabel>
            <Label>Ternate</Label>
            <Input disabled value={hitu} />
          </Item>
          <Item style={styles.disabledInput} stackedLabel>
            <Label>Inggris</Label>
            <Input disabled value={inggris} />
          </Item>
        </View>
      </Content>
    </Container>
  );
}
