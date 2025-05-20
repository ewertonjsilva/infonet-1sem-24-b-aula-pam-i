import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00); 
    const [mensImc, setMensImc] = useState('');
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        let mensagem = '';
        setImc(tmpImc);

        if (imc < 18.5) {
            mensagem = 'Abaixo do peso';
        } 
        
        if (imc >= 18.5 && imc < 25) {
            mensagem = 'Peso normal';
        } 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>Mensagem</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}