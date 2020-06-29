//**As funcionalidades **mínimas** são as mesmas de sexta feira. Segue uma lembrança:

//**- 1. Criar Conta
//- Um cliente pode criar uma conta no banco **se tiver idade maior do que 18 anos**.
//- Ele deve informar: **nome, CPF e data de nascimento (ou, para facilitar, a idade)**.
//- As contas devem guardar essas informações (**nome, CPF e data de nascimento (ou, para facilitar, a idade)** e **uma propriedade para representar o saldo do usuário**.
- Além disso, as contas devem **persistir todos os gastos do usuário num array de extrato** (possuindo o **valor**, a **data** e uma **descrição**).
- Lembre-se de que todas as contas, ao serem criadas, **começam com o saldo zerado**.

- 2. Ver Saldo
- O usuário deve conseguir verificar o saldo da sua conta, **passando o seu CPF e nome.**

- 3. Adicional saldo
- O usuário deve conseguir **adicionar saldo à sua conta**, passando seu **nome, o CPF e o valor** que desejar.
- Todas as operações de adicionar saldo devem gerar um item no extrato da conta do usuário (com um valor positivo)

Como funcionalidade extra, pedimos:

- 4. Ver todas as contas do banco
- Essa funcionalidade é simples: imprimir, no terminal, todas as contas do banco com o formato abaixo:

    ```
    NOME: Astrodev
    CPF:  111.111.111-11
    SALDO: R$234.87
    ```

- 5. Realizar transações
- Essa funcionalidade deve permitir que um usuário gaste o seu dinheiro em que ele quiser: mercado, contas, etc.
- Para isso, ele deve fornecer o valor e uma descrição, sendo que a data da transação deve ser o mesmo dia em que ela foi feita
- Se o usuário não possuir saldo o suficiente, ele não deve ser capaz de realizar a transação
- Um item no extrato deve ser criado com todas as informações necessárias para identificar a transação (descrição, data e valor). O valor, nesse caso, deve ser negativo
- Além disso, o saldo do usuário deve ser atualizado depois deste gasto

- 6. Fazer transferência
- Um usuário deve ser capaz de transferir dinheiro da sua conta para de outro usuário do nosso banco
- Para isso, devem ser fornecidos o nome e o CPF tanto da origem do dinheiro como do destinatário junto com o valor desejado
- O usuário de origem deve possuir saldo o suficiente para realizar a transação
- Um item deve ser criado nos extratos dos dois usuários envolvidos nessa transferência. No extrato de origem, o valor deve ser negativo; já, do destinatário, deve ser positivo

---

## Classes que devem ser implementadas

Como descrito no enunciado, o cliente desse projeto exigiu a utilização de OO. Elencamos aqui as classes mínimas que devem existir:

UserAccount                                                                                                                             
name: string
age: number
cpf: string
balance: number
transactions: Transaction[]
——————————————
getBalance(): number
addBalance(value: number): void

Transaction                                                                                                                               
date: string
value: number
description: string

Bank                                                                                                                                                         accounts: UserAccount[]                                                                     
fileManager: JSONFileManager                                                                                                           ————————————————                                                                                                        createAccount(userAccount: UserAccount): void                                                                                                                                                 getAllAccounts(): UserAccount[]                                                                                                                   getAccountByCpfAndName(cpf: string, name: string): UserAccount | undefined        

JSONFileManager                                                                                                                                           fileName: string                                                                                                                                      ————————————————                                                                                                       getObjectFromFile(): any                                                                                                                                writeObjectToFile(objectToSave: any): void                                                                                 

**Todas as operações devem ser salvas no arquivo JSON**. É permitido utilizar a classe `JSONFileManager` feita em aula e quaisquer códigos criados sexta-feira por você.

Obs.: Deixe a terceira funcionalidade (Adicionar Saldo), bem como a classe `Transaction`, por último. Crie uma funcionalidade por vez, checando no JSON se está funcionando.

---

## Antes de começar...

Estamos fornecendo para você uma classe para exemplificar como seria a implementação do sistema bancário utilizando classes. A  classe de UserAccount possui as seguintes propriedades: nome, CPF, data de nascimento, saldo e transações. 

Abaixo estão alguns exercícios com o objetivo de relembrar os principais conceitos vistos na aula de hoje. Responda as perguntas em comentários no arquivo `index.ts`; e, depois, prossiga para as implementações explicadas no início deste enunciado*/