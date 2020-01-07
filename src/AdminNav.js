import React from "react";

const AdminNav = () => {
  return (
    <div>
      <ul>
        <p>
          <a href="/Admin/AdminApp">Admin Navigator</a>
        </p>
        <li>
          <a href="/Admin/DocHost">DocHost</a>
        </li>
        <li>
          <a href="/Admin/QA">QA</a>
        </li>
        <li>
          <a href="/Admin/QuizMaker">Quiz Maker</a>
        </li>
        <li>
          <a href="/Admin/QuizUpdate">Quiz Update</a>
        </li>
      </ul>
    </div>
  );
};
export default AdminNav;
