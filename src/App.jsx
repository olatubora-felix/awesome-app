import { TodoForm } from "./components/TodoForm";
import { TodoLists } from "./components/TodoLists";
import { Header } from "./components/UI/Header";

const App = () => {
  return (
    <main className="bg-white h-screen flex justify-center items-center p-4 md:p-0">
      <section className="bg-[#F8F9FA] w-full md:w-3/5  mx-auto shadow-md p-5 rounded-lg">
        <Header />
        <TodoForm />
        <div className="bg-gray-200 h-[2px]" />
        <TodoLists />
      </section>
    </main>
  );
};

export default App;
