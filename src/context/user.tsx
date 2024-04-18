import { ReactNode, createContext, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  aluno: string[];
  qtdAlunos: number;
  adicionarAluno: (nomeAluno:string) => void;
}

export const UserContext = createContext({} as UserContextData);
export function UserProvider({ children }: UserProviderProps) {
  const [aluno, setAluno] = useState<string[]>([]);
  const [qtdAlunos, setQtdAlunos] = useState(0);
  function adicionarAluno(novoAluno: string) {
    setQtdAlunos(qtdAlunos + 1);
    setAluno([...aluno, novoAluno]);
  }

  return (
    <UserContext.Provider
      value={{ aluno, qtdAlunos, adicionarAluno }}
    >
      {children}
    </UserContext.Provider>
  );
}
