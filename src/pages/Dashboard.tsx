type Props = {
  onLogout: () => void;
};

function Dashboard({ onLogout }: Props) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard Financeiro</h1>

      <div style={{ marginBottom: 24 }}>
        <button>Learning Center</button>
        <button>LIG</button>
        <button onClick={onLogout}>Sair</button>
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
