// import './App.css'
// import CreatePage from './pages/CreatePage';
// import ReadPage from './pages/ReadPage';
// import UpdatePage from './pages/UpdatePage';
// import Common from './components/Common/Common';


// const App = () => {
//     return (
//         <div>
//             <Common/>
//             <CreatePage/>
//             <ReadPage/>
//             <UpdatePage/>
//         </div>
//     );
// };

// export default App;




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReadPage from './pages/ReadPage';
import Common from './components/Common/Common';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

const App = () => {
    return (
        <BrowserRouter>
        <div className='mb-5'>
            <Common/>
        </div>
        <Routes>
            <Route exact path='/list' element={<ReadPage/>}/>
            <Route exact path='/create' element={<CreatePage/>}/>
            <Route exact path='/update/:id' element={<UpdatePage/>}/>
        </Routes>
            
        </BrowserRouter>
    );
};

export default App;


