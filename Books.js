import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const handleEdit = (id) => {
    navigation.navigate('EditarLivro', { id });
  };

  const handleAddLivro = () => {
    navigation.navigate('AddLivro');
  };

  const handleRefresh = () => {
    setRefreshing(true);

    axios
      .get('http://192.168.0.105:3000/book')
      .then(response => {
        setBooks(response.data.books);
        setRefreshing(false);
      })
      .catch(error => {
        console.error(error);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Adicionar Livro" onPress={handleAddLivro} />
      <FlatList
        data={books}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEdit(item._id)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>By {item.autor}</Text>
              <Text style={styles.description}>{item.descricao}</Text>
              <Image style={styles.image} source={{ uri: item.image }} />
            </View>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Books;
