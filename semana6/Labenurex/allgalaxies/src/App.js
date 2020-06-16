import React from 'react';
import {Botao} from 'styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>- **Os seguintes componentes de página devem ser criados no projeto de vocês (podem ser componentes vazios a priori, mas tenha em mente que amanhã usaremos esses componentes para criar as páginas do nosso projeto):**
    - HomePage  → Para o usuário escolher entre login e formulário de inscrição
    - ListTripsPage → Para vermos todas as viagens
    - CreateTripPage → Para criarmos uma viagem
    - TripDetailsPage → Para o detalhe de uma viagem em específico
    - LoginPage → Para fazermos login como administrador
    - Router → Para administrar todas as rotas

    (Os nomes acima são sugestões)</h1>
        <Botao>clique aqui</Botao>
      </header>
    </div>
  );
}

export default App;
