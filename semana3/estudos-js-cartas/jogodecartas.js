/**
 *Desafio semana3 jogo de cartas 
 *javascript puro
 *
 *Desenvolvedora Jaqueline Louise F. Soares
 * 
 *Turma Julian Future4
 *
 *Objetivo geral: criar um jogo semelhante a Blackjack (também conhecido como "21")
 * 
 *Objetivos específicos:
 *A primeira etapa"Nosso Jogo", refere-se a uma versão reduzida e bem mais simples do blackjack. 
 *A segunda , etapa "Desafio" (se atingida a etapa 1), pretende aproximar o nosso projeto do jogo original
 */


 var nipes=["♦️", "♥️", "♣️", "♠️"];
 var faces=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
 var nipe=nipes[Math.floor(Math.random()*4)];
 var face=faces[Math.floor(Math.random()*faces.length)];
 document.write("<h1>"+face+nipe+"</h1>");
