import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { FilmRow } from '../components/rows';
import { REQUEST_FILMS } from '../store/actions/film';

const FilmList = () => {
    const dispatch = useDispatch();
    const { refreshing, list } = useSelector(state => state.film);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = () => {
        dispatch({ type: REQUEST_FILMS, refresh: true });
    };

    const onEndReached = async () => {
        dispatch({ type: REQUEST_FILMS });
    };

    return (
        <SafeAreaView style={{ flex: 1 }} contentContainerStyle={style.container}>

            <FlatList
                data={list}
                ListHeaderComponent={() => (
                    <Text style={style.title}>Popular movies</Text>
                )}
                keyExtractor={item => `key_${item.id}`}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.7}
                refreshing={refreshing}
                onRefresh={fetch}
                renderItem={({item}) => {
                    return (
                        <FilmRow item={item} />
                    );
                } }
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'red',
    },
    title: {
        margin: 16,
        marginBottom: 10,
        fontSize: 34,
        fontWeight: '800',
    },
});

export default FilmList;
