function criaCalculadora() {
    return{
        //atributos selecionar os elementos que eu quero
        display:document.querySelector('.display'), // 2 para selecionar o input, onde se coloca os números

        btnClear:document.querySelector('.btn-clear'), // 9 selecionar o botão de apagar


        //metodos

        inicia() {
            this.cliqueBotoes()// 1 metodo para iniciar, ou seja inicia quando eu clicar no botão
            this.pressionaEnter() // 18 to criando um metodo pra quando meu usuario clicar no enter
         },

        pressionaEnter(){ // 19 criei o metodo pra presionar o enter
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 16){
                    this.realizaConta()
                }
            }) // keyup e pq quando eu soltar a tecla enter
        },
 
        realizaConta(){ // 16 criei o metodo igual para realizar conta, vamos usar funcao eval, mas é mt perigosa
            let conta = this.display.value // botei o display numa variavel, fica mais facil para trabalhar

            try{
                conta = eval(conta) // com o eval ele vai tentar realizar a conta

                if(!conta){ // se a contar der zero ou alguma coisa errada
                    alert('Conta inválida')
                    return
                }

                this.display.value = conta
            } catch(e){
                alert('Conta inválida')
                return
            }
        },

        apagarUm(){ // 13 criei o metodo para apagar um elemento so, o famoso del
            this.display.value = this.display.value.slice(0, -1) // 14 esse slice faz o seguinte, é o tamanho da string - 1
        },

        clearDisplay() { // 10 criei o metodo para limpar meu display, o value indica que não vai ter mais nada, valor ''
            this.display.value = ''
        },


        cliqueBotoes(){ // 3 capturar os botoes que vão para o display
            document.addEventListener('click', function(e){
                const el = e.target // 4 o que eu to clicando

                if(el.classList.contains('btn-num')) { //   5 se o elemento contem essa classe
                    this.btnParaDisplay(el.innerText) // 6 ou seja se o elemento contém essa classe então ele vai executar a função btnParaDisplay, inner text, to pegando o conteudo do botao
                }

                if(el.classList.contains('btn-clear')){ // 11 se o botão clicado for o btn-clear e vai apagar tudo, valor ''
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){ // 12 aqui eu falo se clicou no del eu quero que apague um elemento, chamei a função para agora criar ela
                    this.apagarUm()
                }

            if (el.classList.contains('btn-eq')){ // 15 agora caso o usuario clique em igual
                this.realizaConta()
            } 
                
            }.bind(this))  // 7 o bind fala pra função usar o meu this não o dela
        },

        btnParaDisplay(valor){
            this.display.value += valor // 8 aqui eu vou concatenar o que tiver no display + o botão que foi clicado, ou seja asssim os elementos já vão estar aparecendo no meu display
        }
    }
}

const calculadora = criaCalculadora()//para chamar a função
calculadora.inicia()