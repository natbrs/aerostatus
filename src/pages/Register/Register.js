import styles from "./Register.module.css";

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("Senhas não conferem!");
      return;
    }
    const res = await createUser(user);

    console.log(res);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);


  return (
    
    <div className={styles.register}>
      <h1>Cadastro</h1>
      <p>Faça o cadastro para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Processando...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;