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

    function converterTempo() {
        const totalSegundos = parseInt(primeiroNumero);
    
        if (!isNaN(totalSegundos)) {
            const h = Math.floor(totalSegundos / 3600);
            const m = Math.floor((totalSegundos % 3600) / 60);
            const s = totalSegundos % 60;
    
            setResultado(`${h}h ${m}min ${s}s`);
        } else {
            setResultado("Valor inválido!");
        }
    
        return setResultado;
    }
    
       
    function caixaAgua() {/*13*/
        setResultado(volume =(parseFloat(primeiroNumero) * parseFloat(segundoNumero) * parseFloat(terceiroNumero)));
        return setResultado("O volume:" + volume)
    }

    function identificarPoligono() {/*14*/ 
        let resultado = "";// posso mudar o valor depois
    
        if (parseFloat(primeiroNumero) == 3) {
            resultado = "Triângulo";
        } else if (parseFloat(primeiroNumero) == 4) {
            resultado = "Quadrado";
        } else if (parseFloat(primeiroNumero) == 5) {
            resultado = "Pentágono";
        } else if (parseFloat(primeiroNumero) == 6) {
            resultado = "Hexágono";
        } else if (parseFloat(primeiroNumero) == 7) {
            resultado = "Heptágono";
        } else if (parseFloat(primeiroNumero) == 8) {
            resultado = "Octógono";
        } else if (parseFloat(primeiroNumero) == 9) {
            resultado = "Eneágono";
        } else if (parseFloat(primeiroNumero) == 10) {
            resultado = "Decágono";
        } else {
            resultado = "Figura não identificada";
        }
    
        setResultado(resultado);
    }
    
    function calcularDesconto() {/*15*/
        let desconto = 0;
    
        if (parseFloat(primeiroNumero) < 100) {
            desconto = 0.05;
        } else if (parseFloat(primeiroNumero) >= 100 && parseFloat(primeiroNumero) <= 500) {
            desconto = 0.10;
        } else if (parseFloat(primeiroNumero) > 500) {
            desconto = 0.15;
        }
    
        const valorFinal = parseFloat(primeiroNumero) - (parseFloat(primeiroNumero) * desconto);
        setResultado(`Desconto: ${desconto * 100}% | Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
    }
    
    function converter() {/*16*/ 
        const c = (parseFloat(primeiroNumero) - 32) * 5 / 9;
        setResultado("A temperatura em Fahrenheit: " + parseFloat(primeiroNumero) + "°F | A temperatura em Celsius: " + c.toFixed(2) + "°C"); //duas casas decimais após o ponto
    }
    
    function inverterNumero() {
        const numero = parseInt(primeiroNumero); 
    
        // Decompor o número em centenas, dezenas e unidades
        const a = Math.floor(numero / 100); // Centena
        const b = Math.floor((numero % 100) / 10); // Dezena
        const c = numero % 10; // Unidade
    
        // Inverter a ordem e criar o número invertido
        const numeroInvertido = 100 * c + 10 * b + a;
    
      
        setResultado("Número invertido: " + numeroInvertido);
    }
    
    function pagar(){
        const total = parseFloat(primeiroNumero) * parseFloat(segundoNumero) * 1.12;
        setResultado("Total a pagar: " + total.toFixed(2));
    }

    function arredondar() {
        const arredondado = Math.round(parseFloat(primeiroNumero));
        setResultado("Número arredondado: " + arredondado);
    }
    
    function validarTriangulo() {
        const a = parseFloat(primeiroNumero);
        const b = parseFloat(segundoNumero);
        const c = parseFloat(terceiroNumero);
    
        if (a + b > c && a + c > b && b + c > a) {
            setResultado("As medidas formam um triângulo válido.");
        } else {
            setResultado("As medidas NÃO formam um triângulo.");
        }
    }
    

  
    

    function limpar(){
       setPrimeiroNumero(0);
       setSegundoNumero(0);
       setTerceiroNumero(0);
       setQuartoNumero(0);
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
        
                    <TouchableOpacity style={styles.botao} onPress={converterTempo}> {/*12*/}
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

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={calcularDesconto}> {/*15*/}
                        <Text style={styles.input}>15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={converter}> {/*16*/}
                        <Text style={styles.input}>16</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={inverterNumero}> {/*17*/}
                        <Text style={styles.input}>17</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={pagar}> {/*18*/}
                        <Text style={styles.input}>18</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.botao} onPress={arredondar}> {/*17*/}
                        <Text style={styles.input}>19</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={validarTriangulo}> {/*18*/}
                        <Text style={styles.input}>20</Text>
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
        margin:200,
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
