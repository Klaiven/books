import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import axios from 'axios';

const EditarLivroScreen = ({ route }) => {
  const { id } = route.params;
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [imageURI, setImageURI] = useState('');

  useEffect(() => {
    axios
      .get(`http://192.168.0.10:3000/book/${id}`)
      .then(response => {
        setBook(response.data.book);
        setTitle(response.data.book.title);
        setAuthor(response.data.book.autor);
        setDescription(response.data.book.descricao);
        setImageURI(response.data.book.image);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleEdit = () => {
    const updatedBook = {
      title,
      autor: author,
      descricao: description,
      image: imageURI,
    };

    axios
      .put(`http://192.168.0.10:3000/book/update/${id}`, updatedBook)
      .then(response => {
        console.log(response.data); // Handle the response as needed
        // You can also navigate to a different screen or perform any other actions upon successful update
      })
      .catch(error => {
        console.error(error);
        // Handle the error or display an error message
      });
  };


  const handleDelete = (id) => {
    axios
      .delete(`http://192.168.0.10:3000/book/delete/${id}`)
      .then(response => {
        console.log(response.data); // Handle the response as needed
        // You can also update the books list or perform any other actions upon successful deletion
      })
      .catch(error => {
        console.error(error);
        // Handle the error or display an error message
      });
  };


  return (
    <View style={styles.container}>
      {book && (
        <>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            value={author}
            onChangeText={setAuthor}
            placeholder="Author"
          />
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
            multiline
          />
          <TextInput
            style={styles.input}
            value={imageURI}
            onChangeText={setImageURI}
            placeholder="Image URI"
          />
          <Image style={styles.image} source={{ uri: book.image }} />
          <Button title="Editar" onPress={handleEdit} />
          <Button title="Excluir" onPress={() => handleDelete(book._id)} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default EditarLivroScreen;
