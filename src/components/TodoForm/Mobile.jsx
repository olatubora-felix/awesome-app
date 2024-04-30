export const MobileAction = () => {
  return (
    <div className=" my-5 md:hidden block">
      <div className="flex justify-end items-center">
        <input
          type="date"
          id="todo-date"
          className="border-none outline-none"
        />
      </div>
      <div className="my-2">
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2  rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};
