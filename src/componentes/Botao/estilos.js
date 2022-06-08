import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, invertido) => StyleSheet.create({
  botao: {
    width: 105,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: invertido ? "#5ad313" : 'orange',
    shadowColor: "#000",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
});