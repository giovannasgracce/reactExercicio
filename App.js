import { AppRegistry} from "react-native";
import {View,Text, StyleSheet,TextInput,TouchableOpacity,ScrollView} from "react-native";
import {useState} from "react";


export default function App(){
    /*Função*/
    const [primeiroNumero ,setPrimeiroNumero] = useState(0); 
    const [segundoNumero ,setSegundoNumero] = useState(0);/*valor inicial da constante é oq esta dentro do parenteses*/ 
    const [terceiroNumero ,setTerceiroNumero] = useState(0);
    const [quartoNumero ,setQuartoNumero] = useState(0);
    const [resultado ,setResultado] = useState();/*altera o estado de algo,da constante ou da variavel-- set*/ 
   
    function multiplo(){ 
        if((parseFloat(primeiroNumero) % 3 == 0) & (parseFloat(primeiroNumero) % 5 == 0)){
            setResultado("O número é múltiplo de 3 e 5");
            }else{
                return setResultado("O número não é múltiplo de 3 e 5");
            }
    }/*parseFloat é para modificar o valor da variavel,por ser fracamente típada ela precisa converter a vaiavel para número*/ /*1*/ 

    function primo() { /*2*/ 
        const numero = parseInt(primeiroNumero);
   
        if (numero <= 1) {
            setResultado("Não é primo");
            return;
        }
   
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                setResultado("Não é primo");
                return;
            }
        }
   
        setResultado("É primo");
    }

    function quadrado(){ /*3*/ 
        setResultado(parseFloat(primeiroNumero) * parseFloat(primeiroNumero));
        return setResultado;
    }

    function hipotenusa(){ /*4*/ 
        setResultado(Math.sqrt(Math.pow(parseFloat(primeiroNumero), 2) + Math.pow(parseFloat(segundoNumero), 2)));
        return setResultado;
    }

    function pnz(){ /*5*/
        if(parseFloat(primeiroNumero) > 0){
            setResultado("O número é positivo");
            }else if (parseFloat(primeiroNumero) < 0){
                return setResultado("O número é negativo");
            }else{
                return setResultado("O número é zero");
            }
    }

    function entre(){ /*6*/ 
    if((100 <= parseFloat(primeiroNumero)) & ( parseFloat(primeiroNumero) <= 200)){
        setResultado("O número pertence a esse meio");
        }else{
            return setResultado("O número não pertence a esse meio");
        }
    }

    function bimestre() {/*7*/ 
        if (media =((parseFloat(primeiroNumero) + parseFloat(segundoNumero) + parseFloat(terceiroNumero) + parseFloat(quartoNumero)) / 4) >= 6) {
            return setResultado("Aprovado com média:" + media);
        } else {
            return setResultado("Reprovado com média:" + media);
        }
    }

    function salario() {/*8*/
        setResultado(parseFloat(primeiroNumero) + (parseFloat(primeiroNumero) * parseFloat(segundoNumero) / 100));
        return setResultado
    }
    
    function distancia(){/*9*/ 
        if(parseFloat(segundoNumero) <= 0){
        setResultado("Impossivel dividir por 0");
        }else{
            setResultado(parseFloat(primeiroNumero) / parseFloat(segundoNumero));
        }
        return setResultado;
    }

    function final() {/*10*/
        setResultado(parseFloat(primeiroNumero) - ((parseFloat(primeiroNumero) * 0.10)));
        return setResultado
    }

    function dias() {/*11*/
        setResultado(parseFloat(primeiroNumero) * parseFloat(segundoNumero));
        return setResultado
    }

    function converterSegundos(segundos) {
        if (true) {
            return Math.floor(segundos / 3600) + "h " +
                   Math.floor((segundos % 3600) / 60) + "min " +
                   (segundos % 60) + "s";
        }
    }
       
    function caixaAgua() {/*13*/
        setResultado(volume =(parseFloat(primeiroNumero) * parseFloat(segundoNumero) * parseFloat(terceiroNumero)));
        return setResultado("O volume:" + volume)
    }

    function identificarPoligono() {/*14*/
        if (parseFloat(terceiroNumero) == 3) {
            return "Triângulo";
        } else if (parseFloat(terceiroNumero) == 4) {
            return "Quadrado";
        } else if (parseFloat(terceiroNumero) == 5) {
            return "Pentágono";
        } else if (parseFloat(terceiroNumero) == 6) {
            return "Hexágono";
        } else if (parseFloat(terceiroNumero) == 7) {
            return "Heptágono";
        } else if (parseFloat(terceiroNumero) == 8) {
            return "Octógono";
        } else if (parseFloat(terceiroNumero) == 9) {
            return "Eneágono";
        } else if (parseFloat(terceiroNumero) == 10) {
            return "Decágono";
        } else {
            return "Figura não identificada";
        }
    }
    

    function limpar(){
       setPrimeiroNumero(0);
       setSegundoNumero(0);
       setResultado(0);
    }

    /*dentro do return,olhamos tudo*/
    return(
      
        <View style={styles.tela}>
            <Text style={styles.tituloPrograma}>EXERCÍCIOS</Text>
            <ScrollView>
                <View style={styles.primeiroCampo}>
                    <TextInput style={styles.input} value={primeiroNumero} /*definindo a varivel para ir no primeiro número,com o que fo preechido*/ onChangeText={novoNumero => setPrimeiroNumero(novoNumero)}/*pega o que foi inseido,tipo uma variavle que guarda,a seta é para usar a varivel dentro do set(novoNumero)*/ placeholder="Informe um número:"/>
                </View>

                <View style={styles.SegundoCampo}>
                    <TextInput style={styles.input} value={segundoNumero} onChangeText={novoNumero => setSegundoNumero(novoNumero)} placeholder="Informe outro número:"/>{/*ele pega o número o textInput*/}
                </View>

                <View style={styles.SegundoCampo}>
                    <TextInput style={styles.input} value={terceiroNumero} onChangeText={novoNumero => setTerceiroNumero(novoNumero)} placeholder="Informe outro número:"/>{/*ele pega o número o textInput*/}
                </View>

                <View style={styles.SegundoCampo}>
                    <TextInput style={styles.input} value={quartoNumero} onChangeText={novoNumero => setQuartoNumero(novoNumero)} placeholder="Informe outro número:"/>{/*ele pega o número o textInput*/}
                </View>

                <View style={styles.areaResultado}>
                    <Text style={styles.textoResultado}>{resultado}</Text> {/*Para mostrar o resultado*/}
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={multiplo}> {/*1*/}
                        <Text style={styles.input}>1</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style={styles.botao} onPress={primo}> {/*2*/}
                        <Text style={styles.input}>2</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={quadrado}> {/*3*/}
                        <Text style={styles.input}>3</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.botao} onPress={hipotenusa}> {/*4*/}
                        <Text style={styles.input}>4</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={pnz}> {/*5*/}
                        <Text style={styles.input}>5</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.botao} onPress={entre}> {/*6*/}
                        <Text style={styles.input}>6</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={bimestre}> {/*7*/}
                        <Text style={styles.input}>7</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.botao} onPress={salario}> {/*8*/}
                        <Text style={styles.input}>8</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={distancia}> {/*9*/}
                        <Text style={styles.input}>9</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.botao} onPress={final}> {/*10*/}
                        <Text style={styles.input}>10</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={dias}> {/*11*/}
                        <Text style={styles.input}>11</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.botao} onPress={converterSegundos}> {/*12*/}
                        <Text style={styles.input}>12</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={caixaAgua}> {/*13*/}
                        <Text style={styles.input}>13</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.botao} onPress={identificarPoligono}> {/*14*/}
                        <Text style={styles.input}>14</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.areaLimpar}>
                <TouchableOpacity style={styles.botao} onPress={limpar}>
                        <Text style={styles.input}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
           
        </View>

    );
}

const styles = StyleSheet.create({
    tela:{
        backgroundColor: "#eb349b",
        width: "100%",
        height: "100%",
    },

    tituloPrograma:{
        marginTop: 60,
        textAlign: "center",
        fontSize: 50,
        color: "#ff96d2",
        fontWeight: 800,

    },

    primeiroCampo:{
        backgroundColor: "#e0adca",
        marginTop: 40,
        padding:10,
        borderRadius:100,
        margin: 10,
        width: "90%",

    },

    SegundoCampo:{
        backgroundColor: "#e0adca",
        marginTop: 15,
        padding:10,
        borderRadius:100,
        margin: 10,
        width: "90%",
    },

    input:{
       textAlign:"center",
       fontSize: 15,
       color: "#f5f2f4",
    },

    botao:{
        backgroundColor: "#e069ad",
        marginTop: 20,
        padding:20,
        alignItems:"center",
        width: "50%",
        borderRadius:100,
    },

    areaBotoes:{
        display:"flex",
        flexDirection:"row",  
    },

    areaResultado:{
        backgroundColor: "#FADADD",
        marginTop: 15,
        padding:10,
        borderRadius:100,
        margin: 10,
        width: "90%",
      
    },  

    textoResultado:{
        color: "##FADADD",
        fintSize: 30,
        textAlign: "center",
      
    },

    areaLimpar:{
        marginTop: 10,
        width: 788,
    },

});

    AppRegistry.registerComponent('main',() => App);
