// import React, {useState} from "react";
// import { UserCard } from "./user";
// import users from "../users.json"
// export const Home = () => {
//   console.log(users);
//   const [output, setOutput] = useState(users);
//   const search = (val) => {
//     setOutput(() => {
//       return users.filter((users) => {
//         return users.username.toLowerCase().includes(val.toLowerCase());
//       });
//     });
//   };
//   return (
//     <div className="userContainer">
//       <input
//         type={"text"}
//         onChange={(e) => {
//           search(e.target.value);
//         }}
//       />
//       {output.length == 0 && <div>No User Found</div>}
//       {output.map((userData, index) => (
//         <UserCard userData={userData} key={index} />
//       ))}
//     </div>
//   );
// };