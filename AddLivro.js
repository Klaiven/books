import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddLivro = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [imageURI, setImageURI] = useState('');

  const handleAddLivro = () => {
    const newLivro = {
      title,
      autor: author,
      descricao: description,
      image: imageURI,
    };

    axios
      .post('http://192.168.0.10:3000/book/add', newLivro)
      .then(response => {
        console.log(response.data); // Handle the response as needed
        // You can also navigate to a different screen or perform any other actions upon successful creation
      })
      .catch(error => {
        console.error(error);
        // Handle the error or display an error message
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter the title"
      />

      <Text style={styles.label}>Author:</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Enter the author"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter the description"
        multiline
      />

      <Text style={styles.label}>Image URI:</Text>
      <TextInput
        style={styles.input}
        value={imageURI}
        onChangeText={setImageURI}
        placeholder="Enter the image URI"
      />

      <Button title="Add Livro" onPress={handleAddLivro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddLivro;
