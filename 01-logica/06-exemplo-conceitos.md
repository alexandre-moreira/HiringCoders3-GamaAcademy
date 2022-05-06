programa {
	funcao inicio() {
	    real nota1, nota2, media
	    
	    escreva("Digite a nota 1: ")
	    leia(nota1)
	    escreva("Digite a nota 2: ")
	    leia(nota2)
	    
	    media = (nota1 + nota2)/2
	    escreva("Sua média é: " + media + "\n")
	   
	    se(media >= 9 e media <= 10){
	        escreva("Conceito A\n")
	    }
	    senao{
	        se(media >= 8 e media < 9){
	            escreva("Conceito B\n")
	        }
	        senao{
	            se(media >= 6 e media < 8){
	                escreva("Conceito C\n")
	            }
	            senao{
	                se(media >= 5 e media < 6){
	                    escreva("Conceito D\n")
	                }
	                senao{
	                    escreva("Reprovado\n")
	                }
	            }
	        }
	    }
        
	    escreva("Fim do programa") 
	}
}
