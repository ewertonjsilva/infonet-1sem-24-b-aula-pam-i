import { View, Text  } from 'react-native'; 

import styles from './styles'; 

function Atividade1 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.texto}>
                React Native é uma estrutura de código aberto para desenvolvimento de aplicativos móveis. Ele foi criado pelo Facebook e permite usar a linguagem JavaScript para criar apps para Android, iOS, Web e UWP (Windows). 
            </Text>
            <Text style={styles.ref}>
                Fonte: Gemini
            </Text>
        </View>
    );
}

export default Atividade1;