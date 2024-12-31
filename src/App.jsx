import Content from "./Content";
import './assets/App.css';
import Todo from "./Todo";
import EventHandler from "./EventHandler";
import MyButton from "./MyButton";
import SayHelloForm from "./SayHelloForm";
import Counter from "./Counter";

function App() {
  // const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, perspiciatis?'
  const posts =
    {
      title: "Judul 1",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, perspiciatis"
  }
  
  const datas = [
    { text: "Belajar HTML", isCompleted: true, isDeleted: true },
    { text: "Belajar CSS", isCompleted: true, isDeleted: false },
    { text: "Belajar JAVASCRIPT", isCompleted: true, isDeleted: false },
    { text: "Belajar PHP", isCompleted: true, isDeleted: false },
    { text: "Belajar PYTHON", isCompleted: false, isDeleted: false },
    { text: "Belajar GOLANG", isCompleted: false, isDeleted: false },
    { text: "Belajar NODEJS", isCompleted: false, isDeleted: false }
  ];
  
  const todos = datas.map((todo, index) => <Todo key={index} {...todo} />)
  return (
    <Content>
      <Header title="Selamat Datang" />
      <Pragrap {...posts}  />
      <Img />
      <ul>
        {todos}
      </ul>
      <EventHandler />
      <MyButton text="Smash Me" onSmash={() => alert('You has been Smash me!')} />
      <SayHelloForm />
      <Counter/>
    </Content>
  )
}

function Header({title=""}) {
  // const title = "Hello Word"
  // const style = {
  //   background: "red",
  //     color:"dark"
  // }
  return (
    <h1 className="title">{title.toLocaleUpperCase()}</h1>
  )
}

function Pragrap({text='Tidak ada teks'}) {
  // const text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, perspiciatis?'
  return (
    <p>{text.toLowerCase()}</p>
  )
}

function Img() {
  const img='../public/download.jpeg'
  return (
    <img className="" src={img} />
  )
}

export default App
