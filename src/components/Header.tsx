import { useContext } from "react";
import { UserContext } from "../context/user";

export function Header() {
  const { qtdAlunos } = useContext(UserContext);
  return (
    <>
      <p>Total de Alunos: {qtdAlunos}</p>
    </>
  );
}
