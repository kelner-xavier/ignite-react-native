import React,
  {useState}

from 'react';

import { 
  View, //componente de visualização
  Text, //componente de inserção de texto
  StyleSheet, //componente de estilização
  TextInput, //input do usuario
  Platform, //pacote de identificação de plataforma utilizada no projeto
  TouchableOpacity, //componente de inserção de botões com alteração de opacidade ao clicar/apertar

} from 'react-native';

//exporting this function to other parts of the code
export function Home() {
  //useState é uma espécie de placeholder que atualiza o status de uma variávela medida que é interagida ()
  const [newSkill/*atualiza o conteúdo(estado)*/, setNewSkill/*monitora o conteúdo*/] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Kelner
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="New Skill"
        placeholderTextColor="#808080"
        onChangeText={setNewSkill} 
      />

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={.7}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 20}]}>
        {newSkill}
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },

  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    alignItems: 'center',
    paddingHorizontal: 40,
    borderRadius: 7,
    marginTop: 20,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
