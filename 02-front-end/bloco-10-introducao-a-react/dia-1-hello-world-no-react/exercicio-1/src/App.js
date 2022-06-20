import logo from './logo.svg';
import './App.css';

const listAfazeres = ['Varrer a casa', 'Limpar o banheiro', 'Estudar', 'Praticar exercicios', 'Alimentar os peixes']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  return (
    <ol>{listAfazeres.map((elem) =>  Task(elem))}</ol>
  );
}

export default App;
