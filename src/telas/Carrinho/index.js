import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import Item from '../Carrinho/Item';
import TelaPadrao from '../../componentes/TelaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho';


export default Carrinho = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const total = data.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

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
      <StatusCarrinho total={total} />
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => String(id)}
            renderItem={({ item }) => <Item{...item} />}
          />
        )}
    </TelaPadrao>
  );
};