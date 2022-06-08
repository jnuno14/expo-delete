import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Botao from "../../../componentes/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro";
import estilos from './estilos';

export default function Item({nome, descricao, preco, caminho_imagem}) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return <>
        <View style={estilos.informacao}>
            <Image source={require('../../../../assets/imagem.jpg')}/>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{
                Intl.NumberFormat('ot-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
        </View>
        <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade</Text>
                    <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
                </View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Total</Text>
                    <Text style={estilos.preco}>{
                        Intl.NumberFormat('ot-BR', {
                        style: 'currency', currency: 'BRL'
                     }).format(total)
                    }</Text>
                </View>
            </View>
            <Botao valor="Adicionar" acao={() => {}}/>
        </View>
        <View style={estilos.divisor} />
    </>
}