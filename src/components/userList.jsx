const userList = (props) => {
  const user = props.user;
  return (
    <div className="mt-5">
      <table className="w-full">
        <thead>
          <tr className="flex justify-between items-center text-white w-full bg-white/10 h-16 rounded-lg px-10 backdrop-blur-sm">
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>متولد</th>
            <th>جنسیت</th>
            <th>ایمیل</th>
            <th>کاربری</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.key} className="flex justify-between items-center text-white w-full bg-white/10 h-16 rounded-lg px-10 backdrop-blur-sm mt-5">
              <td>{item.text.firstname}</td>
              <td>{item.text.lastname}</td>
              <td>{item.text.birthday}</td>
              <td>{item.text.gender}</td>
              <td>{item.text.email}</td>
              <td>{item.text.type}</td>
              <td>
                <button className="bg-violet-900 text-white p-2 rounded-lg mx-2 px-4">
                  Edit
                </button>
                <button
                  className="bg-pink-700 text-white p-2 rounded-lg"
                  onClick={() => props.delete(item.key)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default userList;
