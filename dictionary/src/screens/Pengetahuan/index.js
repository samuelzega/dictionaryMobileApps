import React from 'react';
import {Image, Text, ScrollView, View} from 'react-native';
import {Container, Content, Header, Title, Body} from 'native-base';
import styles from './style';

export default function Pengetahuan() {
  return (
    <Container>
      <Header style={{backgroundColor: '#3498DB'}}>
        <Body>
          <Title>Pengetahuan</Title>
        </Body>
      </Header>
      <Content>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.ternateDesc}>
            Kota Ternate adalah sebuah kota yang berada di bawah kaki gunung api
            Gamalama pada sebuah Pulau Ternatedi Provinsi Maluku
            Utara, Indonesia. Ternate merupakan Ibukota sementara
            Provinsi Maluku Utara secara de factodari tahun 1999 hingga 2010.
            Pada tanggal 4 Agustus 2010, Sofifi diresmikan menjadi ibu kota
            pengganti Ternate.
          </Text>

          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lambang_Kota_Ternate.png/80px-Lambang_Kota_Ternate.png',
            }}
            style={styles.imageLambang}
          />
          <Text style={styles.lambangText}>Lambang Kota Ternate</Text>
          <Text style={styles.lambangText}>Semboyan: Maku Gawene</Text>
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gamalama.jpg/250px-Gamalama.jpg',
            }}
            style={styles.imageDanau}
          />
          <Text style={styles.lambangText}>
            Peta lokasi Kota Ternate di Maluku Utara Koordinat: 0°47′LU
            127°22′BT
          </Text>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>Provinsi</Text>
            <Text style={styles.textDesc}>Maluku Utara</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>Pemerintah</Text>
            <Text style={styles.textDesc}>Walikota : Burhan Abdurahman</Text>
            <Text style={styles.textDesc}>Wakil Walikota : Abdullah Tahir</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>APBD</Text>
            <Text style={styles.textDesc}>DAU : Rp. 462.645.746.000.-</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>Luas</Text>
            <Text style={styles.textDesc}>162,17 km2</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>Populasi</Text>
            <Text style={styles.textDesc}>Total: 233.000 jiwa</Text>
            <Text style={styles.textDesc}>Kepadatan: 1.436,76 jiwa/km2</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>Demografi</Text>
            <Text style={styles.textSubTitle}>Agama</Text>
            <Text style={styles.textDesc}>Islam 96,57%</Text>
            <Text style={styles.textDesc}>Kristen 3,30%</Text>
            <Text style={styles.textDesc}>Protestan 2,96%</Text>
            <Text style={styles.textDesc}>Katolik 0,34%</Text>
            <Text style={styles.textDesc}>Konghucu 0,06%</Text>
            <Text style={styles.textDesc}>Hindu 0,05%</Text>
            <Text style={styles.textDesc}>Buddha 0,02%</Text>
            <Text style={styles.textSubTitle}>Kode Area Telepon</Text>
            <Text style={styles.textDesc}>0921</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>Pembagian administratif</Text>
            <Text style={styles.textDesc}>Kecamatan: 8</Text>
            <Text style={styles.textDesc}>Kelurahan: 78</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.textTitle}>Situs Web</Text>
            <Text style={styles.textDesc}>http://www.ternate.go.id</Text>
          </View>

          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/COLLECTIE_TROPENMUSEUM_Uitzicht_op_Ternate_TMnr_3728-865.jpg/200px-COLLECTIE_TROPENMUSEUM_Uitzicht_op_Ternate_TMnr_3728-865.jpg',
            }}
            style={styles.imageDanau}
          />
          <Text style={styles.lambangText}>
            Pemandangan pulau Ternate pada tahun 1880-an
          </Text>

          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/COLLECTIE_TROPENMUSEUM_Huis_langs_het_strand_van_Ternate_TMnr_60018588.jpg/200px-COLLECTIE_TROPENMUSEUM_Huis_langs_het_strand_van_Ternate_TMnr_60018588.jpg',
            }}
            style={styles.imageDanau}
          />
          <Text style={styles.lambangText}>
            Rumah di pulau Ternate (tahun 1910-an)
          </Text>

          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/COLLECTIE_TROPENMUSEUM_Fort_Toloko_te_Ternate_TMnr_60033706.jpg/200px-COLLECTIE_TROPENMUSEUM_Fort_Toloko_te_Ternate_TMnr_60033706.jpg',
            }}
            style={styles.imageDanau}
          />
          <Text style={styles.lambangText}>
            Benteng Tolukko di pulau Ternate (tahun 1930-an)
          </Text>

          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/COLLECTIE_TROPENMUSEUM_Woning_in_koloniale_stijl_Ternate_TMnr_10017122.jpg/200px-COLLECTIE_TROPENMUSEUM_Woning_in_koloniale_stijl_Ternate_TMnr_10017122.jpg',
            }}
            style={styles.imageDanau}
          />
          <Text style={styles.lambangText}>
            Rumah Belanda di Ternate di sekitar tahun 1920-an
          </Text>
        </ScrollView>
      </Content>
    </Container>
  );
}
