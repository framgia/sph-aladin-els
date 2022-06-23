import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userSelect } from "../../redux/userSlice";

function DashBoardPage() {
  const { email, lastname, firstname } = useAppSelector(userSelect);

  return (
    <div>
      <div>
        <img
          src="https://i.pinimg.com/564x/76/44/e1/7644e184b0c865177611bc457e4b6033.jpg"
          alt=""
        />
        <p>{firstname}</p>
        <p>{lastname}</p>
      </div>
    </div>
  );
}

export default DashBoardPage;
