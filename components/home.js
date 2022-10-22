import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, Button } from 'react-native';
import {bandara } from '../data/data';

const home = ({ navigation }) => {
    const [asal, ganti_asal] = useState('');
    const [tujuan, ganti_tujuan] = useState('');
    const [tanggal, ganti_tanggal] = useState('');

    const onSubmit = () => {

        let asal_baru;
        for (const [key, value] of Object.entries(bandara)) {
            if (value.bandara_nama === asal) {
                asal_baru = (key);
                break;
            }

        }

        let tujuan_baru;
        for (const [key, value] of Object.entries(bandara)) {
            if (value.bandara_nama === tujuan) {
                tujuan_baru = (key);
                break;
            }

        }


        navigation.navigate('Dua', {
            asal: asal_baru,
            tujuan: tujuan_baru,
            tanggal: tanggal,
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                paddingTop: 20

            }}>
                Hiling.id
            </Text>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 10,
                paddingTop: 2
            }}>
                <Text style={{
                    height: 10,
                    margin: 6,
                    padding: 5,
                    fontWeight: 'bold'
                }}>Lokasi Keberangkatan</Text>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    value={asal}
                    onChangeText={ganti_asal}
                    autoCompleteType={undefined}
                    placeholder="Masukan Lokasi Keberangkatan"
                />
            </View>
            <View style={{
                marginHorizontal: 15,
                marginVertical: 15,
                paddingTop: 2
            }}>
                <Text style={{
                    height: 10,
                    margin: 6,
                    padding: 5,
                    fontWeight: 'bold'
                }}>Lokasi Tujuan</Text>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    value={tujuan}
                    onChangeText={ganti_tujuan}
                    autoCompleteType={undefined}
                    placeholder="Masukan Tujuan Keberangkatan"
                />
            </View>
            <View style={{
                marginHorizontal: 15,
                marginVertical: 15,
                paddingTop: 2
            }}>
                <Text style={{
                    height: 10,
                    margin: 6,
                    padding: 5,
                    fontWeight: 'bold'
                }}>Tanggal Keberangkatan</Text>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    value={tanggal}
                    onChangeText={ganti_tanggal}
                    autoCompleteType={undefined}
                    placeholder="Masukan Tanggal Keberangkatan"
                />
            </View>
            
            <View style={{
                alignItems: 'center',
            }}>
                <Button
                    onPress={onSubmit}
                    color="green"
                    title="Cari"
                />
            </View>

            <View style={{
                marginBottom: 20,
                alignItems: 'center',
            }}>
                <Text>Copyright Michael Pascalis Simanjuntak - 120140137</Text>
            </View>

        </SafeAreaView>
    );
};

export default home;