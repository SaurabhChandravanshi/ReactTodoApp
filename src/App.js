import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './MyComponents/AddTodo';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import FAQ from './MyComponents/FAQ';
import {faqData} from './Data/FAQData'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './MyComponents/About';
import NotFound from './MyComponents/NotFound';

function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const onAdd = (title, desc) => {
    const myTodo = {
      id: todos.length + 1, title: title, desc: desc, status:'Pending',isDone:false
    };
    setTodos([myTodo, ...todos]);
  };

  const onChangeStatus = (todo) => {
    const index = todos.indexOf(todo);
    const alt = {id:todo.id,title:todo.title, desc:todo.desc, isDone:!todo.isDone, status:todo.status === 'Pending'?'Done':'Pending'};
    todos[index] = alt;
    setTodos([...todos]);
  };
  const [todos, setTodos] = useState(localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos')));
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path='/' element={[<AddTodo onAdd={onAdd} />, <Todos todos={todos} onDelete={onDelete} onChangeStatus={onChangeStatus} />]}></Route>
          <Route exact path='/faq' element={<FAQ faqs={faqData}/>}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;