import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
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
import {ScrollView} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [indo, setIndo] = useState('');
  const [ternate, setTernate] = useState('');
  const [inggris, setInggris] = useState('');
  const [sugestion, setSugestion] = useState([]);
  useEffect(() => {
    if (inggris.length > 1) {
      let found = kamus.filter((element) => element.inggris.includes(inggris));
      setSugestion(found);
    } else {
      setSugestion([]);
    }
  }, [inggris]);
  const translate = (word) => {
    if (word) {
      setInggris(word);
    }
    let toTranslate = word ? word : inggris;
    let found = kamus.find((element) => element.inggris === toTranslate);
    setTernate(
      found ? found.ternate : `${toTranslate} tidak terdaftar dalam kamus`,
    );
    setIndo(found ? found.indo : `${toTranslate} tidak terdaftar dalam kamus`);
    setSugestion([]);
  };
  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Inggris</Title>
        </Body>
      </Header>
      <Content>
        <ScrollView>
          <View style={styles.container}>
            <Item floatingLabel>
              <Label>Inggris</Label>
              <Input onChangeText={setInggris} value={inggris} />
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
                    onPress={() => translate(data.inggris)}
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
                      {data.inggris}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            <Button title="ARTI" action={translate} />
            <Item style={styles.disabledInput} stackedLabel>
              <Label>Ternate</Label>
              <Input disabled value={ternate} />
            </Item>
            <Item style={styles.disabledInput} stackedLabel>
              <Label>Indonesia</Label>
              <Input disabled value={indo} />
            </Item>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}
