import "./Copyright.css";
import { IoMdHeart } from "react-icons/io";

function Copyright() {
  return (
    <>
      <div className="mainContainer">
        <hr />
        <p className="copyright">
          &copy; 2025 Nex<span>Bot</span> . All rights reserved
        </p>
        <p>
          Designed and Developed with&nbsp;
          <IoMdHeart color="red" />
          &nbsp;by Abhishek
        </p>
      </div>
    </>
  );
}

export default Copyright;
