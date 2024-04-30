import { DesktopAction } from "./Desktop";
import { MobileAction } from "./Mobile";

export const TodoForm = () => {
  return (
    <section className="py-6">
      <form>
        <div className="bg-white py-3 px-4 flex items-center rounded-md shadow-xl ">
          <input
            type="text"
            placeholder="Add a new todo"
            className="flex-1 border-none outline-none italic placeholder:text-blue-500"
          />
          <DesktopAction />
        </div>
        <MobileAction />
      </form>
    </section>
  );
};
