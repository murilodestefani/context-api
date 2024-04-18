import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import { Button, Input } from "@nextui-org/react";

export function Nome() {
  const { aluno, adicionarAluno } = useContext(UserContext);
  const [nomeAluno, setNomeAluno] = useState("");
  console.log(JSON.stringify(aluno));

  return (
    <div>
      <Input
        type="text"
        label="Nome do Aluno"
        onChange={(e) => setNomeAluno(e.target.value)}
      />
      <Button onClick={() => adicionarAluno(nomeAluno)}>Adicionar Aluno</Button>
      <p>{JSON.stringify(aluno)}</p>
    </div>
  );
}
