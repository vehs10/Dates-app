import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Paciente = ({ item, setModalVisible, pacienteEditar }) => {
  const { paciente, sintomas } = item;
  return (
    <View style={styles.contenedor}>
      <Text style={styles.txtPaciente}>PACIENTE: {paciente}</Text>
      <Text style={styles.txtPaciente}>SINTOMAS PRESENTADOS: {sintomas}</Text>
      <View style={styles.contenedorBtn}>
        <Pressable style={[styles.btn, styles.btnEditar]}
        onPress={() => {
          setModalVisible(true)
          pacienteEditar(id)
        }}>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#FFF",
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    borderColor: "#187603",
    borderBottomWidth: 3,
    borderRightWidth: 3,
  },
  txtPaciente: {
    fontWeight: "600",
  },
  contenedorBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: "#f59e0b",
    

  },
  btnEliminar: {
    backgroundColor: "#f72513"
  },
  btnTexto: {
    color: "#FFF",
    fontWeight: "700",
    textTransform: 'uppercase'
  },
});

export default Paciente;
