import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoHelpCircleSharp } from "react-icons/io5";
import dayjs from "dayjs";
export const TodoLists = () => {
  const todos = [
    {
      id: 1,
      title: "Learn React",
      completed: true,
      date: "2022-12-12",
    },
    {
      id: 2,
      title: "Learn Tailwind CSS",
      completed: false,
      date: "2022-12-12",
    },
    {
      id: 3,
      title: "Learn TypeScript",
      completed: true,
      date: "2024-03-12",
    },
  ];
  return (
    <section className="py-6">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex  justify-between py-2 md:flex-row flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={todo.completed} />
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </span>
            </div>
            <div className=" gap-2 grid grid-cols-2 md:grid-cols-1">
              <div className="flex items-center gap-2 w-full">
                <button className="text-blue-500">
                  <MdEdit fontSize={20} />
                </button>
                <button className="text-red-500">
                  <MdDelete fontSize={20} />
                </button>
              </div>
              <p className="flex items-center gap-1 justify-end">
                <IoHelpCircleSharp />
                {dayjs(todo.date).format("DD MMM, YYYY")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
