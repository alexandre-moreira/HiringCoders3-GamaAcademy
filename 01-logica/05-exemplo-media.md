programa {
	funcao inicio() {
	    real nota1, nota2, media
	    
	    escreva("Digite a nota 1: ")
	    leia(nota1)
	    escreva("Digite a nota 2: ")
	    leia(nota2)
	    
	    media = (nota1 + nota2)/2
	    escreva("Sua média é: " + media + "\n")
	    
	    se(media >= 6.0){
	        escreva("Parabéns, você foi aprovado(a)!\n")
	    }
	    senao{
	        escreva("Obaa nos vemos ano que vem!\n")
	    }
	    
	    escreva("Fim do programa")
	    
	}
}
