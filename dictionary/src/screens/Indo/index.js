import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
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
    if (indo.length > 1) {
      let found = kamus.filter((element) => element.indo.includes(indo));
      setSugestion(found);
    } else {
      setSugestion([]);
    }
  }, [indo]);
  const translate = (word) => {
    if (word) {
      setIndo(word);
    }
    let toTranslate = word ? word : indo;
    let found = kamus.find((element) => element.indo === toTranslate);
    setTernate(
      found ? found.ternate : `${toTranslate} tidak terdaftar dalam kamus`,
    );
    setInggris(
      found ? found.inggris : `${toTranslate} tidak terdaftar dalam kamus`,
    );
    setSugestion([]);
  };
  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Indonesia</Title>
        </Body>
      </Header>
      <Content>
        <ScrollView>
          <View style={styles.container}>
            <Item floatingLabel>
              <Label>Indonesia</Label>
              <Input onChangeText={setIndo} value={indo} />
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
                    onPress={() => translate(data.indo)}
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
                      {data.indo}
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
              <Label>Inggris</Label>
              <Input disabled value={inggris} />
            </Item>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}
