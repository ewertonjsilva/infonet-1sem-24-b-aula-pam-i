import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f865', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: '#0019f7', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: '#0019f7', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20, 
        borderWidth: 6, 
    }, 
    texto: {
        marginTop: 40, 
        marginBottom: 20, 
        fontSize: RFPercentage(2.2), 
        fontFamily: 'monospace', 
    }, 
    ref: {        
        fontSize: RFPercentage(1.8), 
        width: '100%', 
        textAlign: 'right', 
        color: '#0019f7'
    }
});

export default styles;