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
    let found = kamus.find((element) => element.inggris === inggris);
    setHitu(found ? found.ternate : `${inggris} tidak terdaftar dalam kamus`);
    setIndo(found ? found.indo : `${inggris} tidak terdaftar dalam kamus`);
  };
  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Inggris</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.container}>
          <Item floatingLabel>
            <Label>Inggris</Label>
            <Input onChangeText={setInggris} value={inggris} />
          </Item>
          <Button title="ARTI" action={translate} />
          <Item style={styles.disabledInput} stackedLabel>
            <Label>Ternate</Label>
            <Input disabled value={hitu} />
          </Item>
          <Item style={styles.disabledInput} stackedLabel>
            <Label>Indonesia</Label>
            <Input disabled value={indo} />
          </Item>
        </View>
      </Content>
    </Container>
  );
}
