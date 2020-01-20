import React, { useState, useEffect } from "react";
import "./global.css";
import "./Sidebar.css";
import "./App.css";
import "./Main.css";
import api from "./services/api";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

// Componente : Bloco isolado de Html, CSS e Js. O qual não interfere no restante da aplicação.
// Propriedade: Informações de um componente PAI para um FILHO
// Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
