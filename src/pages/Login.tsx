type Props = {
  onLogin: () => void;
};

function Login({ onLogin }: Props) {
  return (
    <div style={{ maxWidth: 300, margin: "100px auto" }}>
      <h2>Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />

      <button onClick={onLogin}>Entrar</button>
    </div>
  );
}

export default Login;
