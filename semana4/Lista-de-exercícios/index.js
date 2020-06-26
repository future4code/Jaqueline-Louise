/**- **Exercícios**
    - Exercícios de Funções de array
        1. Cite 3 maneiras de se percorrer/iterar um array, que você conheceu antes das funções de array. Faça um programa para exemplificar.
        
        2. Considere um array com o seguinte formato:

                [
                	{ nome: "Pedro", idade: 20 },
                	{ nome: "João", idade: 10 },
                	{ nome: "Paula", idade: 12 },
                	{ nome: "Artur", idade: 89 } 
                ]

            a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 20)

            b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

        3. Em todos os itens deste exercício, você terá que escrever uma **função** cuja entrada seja um **array**. Para testes, considere: `const array = [1, 2, 3, 4, 5, 6]`.

            a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.

            b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]` 

            c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]` 

        4. Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:

                const pessoas = [
                	{ nome: "Paula", idade: 12, altura: 1.8},
                	{ nome: "João", idade: 20, altura: 1.3},
                	{ nome: "Pedro", idade: 15, altura: 1.9},
                	{ nome: "Luciano", idade: 22, altura: 1.8},
                	{ nome: "Artur", idade: 10, altura: 1.2},
                	{ nome: "Soter", idade: 70, altura: 1.9}
                ]

            A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

            a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão de entrar** no brinquedo

            b) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** no brinquedo.

        5. Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

                const consultas = [
                	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
                	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
                	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
                	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
                ]

            A sua tarefa é criar um **array** com os e-mails para cada um deles. Existem dois padrões de e-mail. 

            Para as consultas **não canceladas** é:

                Olá, ${ Sr./Sra. } ${ nome da pessoa }. Estamos enviando esta mensagem para
                ${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse
                o recebimento deste e-mail.

            Para as consultas **canceladas** é:

                Olá, ${ Sr./Sra. } { nome da pessoa }. Infelizmente, sua consulta marcada
                para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em 
                contato conosco para remarcá-la

        6. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

                const contas = [
                	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
                	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
                	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
                	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
                	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
                	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
                ]

            A sua tarefa é: faça uma função que receba um **array** com os objetos do tipo acima e atualize o **saldo total** individual de cada um, **sem criar um novo** array.

            Em outras palavras, o **array** do exemplo acima deve ficar assim:

                [ 
                	{ cliente: 'João', saldoTotal: 400, compras: [ 100, 200, 300 ] },
                	{ cliente: 'Paula', saldoTotal: 6260, compras: [ 200, 1040 ] },
                  { cliente: 'Pedro', saldoTotal: -3340, compras: [ 5140, 6100, 100, 2000 ] },
                  { cliente: 'Luciano', saldoTotal: -1900, compras: [ 100, 200, 1700 ] },
                  { cliente: 'Artur', saldoTotal: 1300, compras: [ 200, 300 ] },
                  { cliente: 'Soter', saldoTotal: 1200, compras: [] } 
                ] */