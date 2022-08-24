import './App.css';
import TodoList from './pages/TodoList.jsx';
import Detail from './components/detail/Detail';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" exact element={<TodoList />} />
          <Route path="/detail/:id" exact element={<Detail />}/>
          <Route path="*" element={<div>404error 없는 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;