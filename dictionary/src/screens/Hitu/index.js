import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [indo, setIndo] = useState('');
  const [hitu, setHitu] = useState('');
  const [inggris, setInggris] = useState('');
  const [sugestion, setSugestion] = useState([]);
  useEffect(() => {
    if (hitu.length > 1) {
      let found = kamus.filter((element) => element.ternate.includes(hitu));
      setSugestion(found);
    } else {
      setSugestion([]);
    }
  }, [hitu]);
  const translate = (word) => {
    if (word) {
      setHitu(word);
    }
    let toTranslate = word ? word : hitu;
    let found = kamus.find((element) => element.ternate === toTranslate);
    console.log('ini adalah hasilnya', found);
    setIndo(found ? found.indo : `${toTranslate} tidak terdaftar dalam kamus`);
    setInggris(
      found ? found.inggris : `${toTranslate} tidak terdaftar dalam kamus`,
    );
    setSugestion([]);
  };

  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Ternate</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.container}>
          <Item floatingLabel>
            <Label>Ternate</Label>
            <Input onChangeText={setHitu} value={hitu} />
          </Item>
          {sugestion.length > 0 && (
            <View
              style={{
                borderBottomWidth: 1.5,
                borderRightWidth: 1.5,
                borderLeftWidth: 1.5,
                borderColor: '#bfbebe',
              }}>
              {sugestion.map((data, index) => (
                <TouchableOpacity
                  onPress={() => translate(data.ternate)}
                  key={index}>
                  <Text
                    style={{
                      width: Dimensions.get('screen').width - 60,
                      borderBottomWidth: 0.5,
                      borderColor: '#bfbebe',
                      paddingVertical: 5,
                      color: '#6a6866',
                      paddingStart: 5,
                    }}>
                    {data.ternate}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <Button title="ARTI" action={translate} />
          <Item style={styles.disabledInput} stackedLabel>
            <Label>Indonesia</Label>
            <Input disabled value={indo} />
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
