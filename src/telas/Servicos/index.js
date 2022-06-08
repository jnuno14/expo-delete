import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image } from 'react-native';
import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';


export default Servicos = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProduto = async () => {
     try {
      const response = await fetch('https://reobra.herokuapp.com/reobra/produto');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProduto();
  }, []);

  return (
    <TelaPadrao>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => String(id)}
            renderItem={({ item }) => <Image{...item} />}
            renderItem={({ item }) => <Item{...item} />}
          />
        )}
        <Button color="#5ad313"
          title="Carrinho" 
          onPress={ () => navigation.navigate("Carrinho")} />
    </TelaPadrao>
  );
};