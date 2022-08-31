import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextComponent, FlatList } from "react-native";
import Formulario from "./components/Formulario";
import Paciente from "./components/Paciente";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
  }

  const nuevaCitaHandler = () => {
    console.log("Diste click");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.AdministradorCitas}>Administrador de Citas!</Text>
      <Text style={styles.titulo}>Veterinaria Linyi Chang</Text>

      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay pacientes</Text>
       : 
        <FlatList style={styles.listado}
         data={pacientes} 
         keyExtractor={(item) => item.id}
         renderItem={({item}) =>{
          return(
            <Paciente  item={item}
            setModalVisible={setModalVisible}
            pacienteEditar={pacienteEditar}/>
          )
         }}/>
      }

      <Formulario
        modalVisible={modalVisible}
        nuevaCitaHandler={nuevaCitaHandler}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#CFFFC4",
  },
  titulo: {
    fontWeight: "700",
    fontSize: 20,
    color: "#177E01",
    marginBottom: 20,
  },
  AdministradorCitas: {
    fontSize: 18,
    fontWeight: "900",
  },
  btnNuevaCita: {
    backgroundColor: "#22A006",
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  noPacientes: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "600",
  },
  listado:{
    marginTop: 50
  }
});
