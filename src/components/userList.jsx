const userList = () => {
  return (
    <div className="flex justify-between items-center px-10 bg-white/10 backdrop-blur-sm w-full m-auto mt-5 h-16 rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="flex justify-between items-center text-white w-full">
            <th>نام</th>
            <th>متولد</th>
            <th>جنسیت</th>
            <th>ایمیل</th>
            <th>کاربری</th>
            <th>تاریخ عضویت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default userList;
