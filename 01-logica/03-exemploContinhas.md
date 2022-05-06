programa {
	funcao inicio() {
	    inteiro valor1, valor2, resultado
	    escreva("Digite um valor: ")
	    leia(valor1)
	    escreva("Digite outro valor: ")
	    leia(valor2)
	    escreva("======= App contas ======= \n")
	    resultado = valor1 + valor2
	    escreva("Resultado da soma é = " + resultado + "\n")
	    
	    resultado = valor1 - valor2
	    escreva("Resultado da subtração é = " + resultado + "\n")
	    
	    resultado = valor1 * valor2
	    escreva("Resultado da multiplicação é = " + resultado + "\n")
	    
	    resultado = valor1 / valor2
	    escreva("Resultado da multiplicação é = " + resultado + "\n")
	    
	    resultado = valor1 % valor2
	    escreva("Resultado do resto é = " + resultado + "\n")
	}
}