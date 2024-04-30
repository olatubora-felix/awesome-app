export const DesktopAction = () => {
  return (
    <div className="items-center gap-3 md:flex hidden">
      <label htmlFor="todo-date">
        <input
          type="date"
          id="todo-date"
          className="border-none outline-none"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white w-[200px] p-2  rounded-lg"
      >
        Add
      </button>
    </div>
  );
};
