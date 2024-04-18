import { Aluno } from "../../components/Aluno";
import { Header } from "../../components/Header";
import { UserProvider } from "../../context/user";

export function Home() {
  return (
    <UserProvider>
      <Header />
      <Aluno />
    </UserProvider>
  );
}
