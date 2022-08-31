import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  Pressable,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";


const Formulario = ({ setPacientes, pacientes, setModalVisible, modalVisible, paciente: pacienteObj}) => {

  const [id, setId] =("");
  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    if(Object.keys(pacienteObj).length > 0){
      setId(pacienteObj.id)
      setPaciente(pacienteObj.paciente)
      setPropietario(pacienteObj.propietario)
      setEmail(pacienteObj.email)
      setTelefono(pacienteObj.telefono)
      setSintomas(pacienteObj.sintomas)
    }
  }, [])
  

  const handleCita = () => {
    if ([paciente, propietario, email, telefono, sintomas].includes("")){
      Alert.alert("Error", "Llena todos los datos porfavor")
      return
    }
   

    const nuevoPaciente = {
      id: Date.now(),
        paciente,
       propietario,
       email,
       telefono,
       sintomas,
    }

    
    setPacientes([...pacientes, nuevoPaciente])
    setModalVisible(!modalVisible)
    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setSintomas('')

    
    
  
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Nueva Cita</Text>

          <Pressable
            style={styles.btnCancelar}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.TextCancelar}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              placeholder="Nombre Paciente"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              placeholder="Nombre Propietario"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="email@gmail.com"
              placeholderTextColor={"#666"}
              style={styles.input}
              keyboardType="email-addres"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono</Text>
            <TextInput
              placeholder="TEL"
              placeholderTextColor={"#666"}
              style={styles.input}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              placeholder="Sintomas del paciente"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <Pressable style={styles.btnAgregar} onPress={handleCita}>
            <Text style={styles.textAgregar}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#22A006",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
    color: "#fff",
  },
  btnCancelar: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#187603",
    padding: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  TextCancelar: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: "#fff",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  btnAgregar: {
    marginVertical: 50,
    backgroundColor: "#f59e0b",
    padding: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  textAgregar: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

export default Formulario;
