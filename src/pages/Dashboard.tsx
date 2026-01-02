import { useEffect, useState } from "react";

type Props = {
  onLogout: () => void;
};

function Dashboard({ onLogout }: Props) {
  const [backendStatus, setBackendStatus] = useState<
    "loading" | "online" | "offline"
  >("loading");

  const [healthMessage, setHealthMessage] = useState<string>("");

  useEffect(() => {
    fetch("https://opp-backend-8nlo.onrender.com/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao acessar backend");
        }
        return response.json();
      })
      .then((data) => {
        setBackendStatus("online");
        setHealthMessage(data.status);
      })
      .catch(() => {
        setBackendStatus("offline");
      });
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard Financeiro</h1>

      <div style={{ marginBottom: 24 }}>
        <button>Learning Center</button>
        <button>LIG</button>
        <button onClick={onLogout}>Sair</button>
      </div>

      <div style={{ marginBottom: 24 }}>
        {backendStatus === "loading" && <p>Verificando backend...</p>}

        {backendStatus === "online" && (
          <p style={{ color: "lightgreen" }}>
            Backend: ONLINE — status: {healthMessage}
          </p>
        )}

        {backendStatus === "offline" && (
          <p style={{ color: "red" }}>Backend: OFFLINE</p>
        )}
      </div>

      <div>
        <p>Receita: R$ 120.000</p>
        <p>Despesas: R$ 75.000</p>
        <p>Saldo: R$ 45.000</p>
      </div>
    </div>
  );
}

export default Dashboard;
