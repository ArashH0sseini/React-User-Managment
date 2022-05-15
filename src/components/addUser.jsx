import { ViewListIcon, ViewGridIcon } from "@heroicons/react/solid";

const addUser = (props) => {
  return (
    <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm w-full p-5">
      <div className="flex justify-center items-center">
        <h3 className="text-white">لیست کاربران</h3>
        <ViewGridIcon className="h-5 w-5 text-white mr-3" />
        <ViewListIcon className="h-5 w-5 text-white" />
      </div>
      <button onClick={props.modal} className="text-white bg-rose-600 rounded-md p-2">
        کاربر جدید
      </button>
    </div>
  );
};

export default addUser;
