import React from 'react'
import "./test.css"
const App = () => {
  return (
    <>
    <div className='headerContainer'>
      <div className='leftOfHeader'>
        <div className='iconLogo'></div>
        <div className='descAndAccess'></div>
      </div>
      <div className='rightOfHeader'>
        <div className='servicesAndContacts'></div>
      </div>
    </div>
    
    </>

  )
}

export default App










// import React from 'react'
// import { Home } from './pages/home'
// import { SeeDetail } from './pages/SeeDetail'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home />}/>
//       <Route path='/:username' element={<SeeDetail />}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }
// import { Comment, Example } from "./List";
// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <body>
//       <div className="header">
//         <h2>ToDo List</h2>
//       </div>
//       <div className="bigContainer">
//         <div className="toDoListTop">
//           <h1 className="todo">ToDo List</h1>
//             <Example />
//         </div>
//         <div className="List">
//           <Comment />
//         </div>
//       </div>
//     </body>
//   );
// }
// export default App;
