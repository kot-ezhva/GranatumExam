import React from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

const posterWidth = width / 3;
const posterHeight = posterWidth / .69;

const FilmRow = ({ item }) => {

    const getImageUri = path => {
        return `https://image.tmdb.org/t/p/w500${path}`;
    };

    return (
        <ImageBackground style={style.bg} source={{ uri: getImageUri(item.backdrop_path) }}>
            <View style={style.backdrop}/>

            <FastImage
                style={style.poster}
                resizeMode="cover"
                source={{ uri: getImageUri(item.poster_path) }}
            />

            <View style={style.info}>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.desc} numberOfLines={4}>{item.overview}</Text>

                <View style={style.ratingRow}>
                    <Text style={[style.ratingText, style.bold]}>Популярность: </Text>
                    <Text style={style.ratingText}>{parseInt(item.popularity)}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    bg: {
        paddingHorizontal: 10,
        paddingVertical: 14,
        marginVertical: .5,
        flexDirection: 'row',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, .7)',
    },
    title: {
        fontSize: 23,
        fontWeight: '600',
        color: '#FFF',
    },
    desc: {
        marginTop: 6,
        color: '#FFF',
    },
    poster: {
        borderRadius: 4,
        width: posterWidth,
        height: posterHeight,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    ratingRow: {
        flexDirection: 'row',
        marginTop: 'auto',
    },
    ratingText: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 10,
    },
    bold: {
        fontWeight: '700',
    },
});

export default FilmRow;
