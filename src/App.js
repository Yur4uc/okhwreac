import {Link, Route, Routes} from "react-router-dom"

import {Todos, Albums, Comments, CommentsDetails,} from './configs/url.js'

function App() {
    return (
        <div>
            <ul>
                <li><Link className={'link'} to={'/todos'}>Todos</Link></li>
                <li><Link className={'link'} to={'/albums'}>Albums</Link></li>
                <li><Link className={'link'} to={'/comments'}>Comments</Link></li>
            </ul>

            <Routes>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/posts/:id'} element={<CommentsDetails/>}/>
                <Route index path={'/'}/>
            </Routes>
        </div>
    );
}


export default App;
