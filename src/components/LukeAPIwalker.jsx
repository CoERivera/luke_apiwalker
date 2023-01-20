import { Outlet } from 'react-router-dom';
import Form from './Form'

function LukeAPIwalker() {
    return (
        <>
            <Form />
            <h1 className='mt-3 ml-5'>Welcome to Luke APIwalker</h1>
            <Outlet />
        </>
    )
}

export default LukeAPIwalker