import { Outlet } from 'react-router-dom';
import Form from './Form'
import obi_wan from "../images/Obi-Wan.png";

function Error() {
    return (
        <>
            <Form />
            <h1 className='mt-3 ml-5'>
                These aren't the droids you're looking for.<br />
                <img
                    className='mt-3'
                    src={obi_wan}
                    alt="Obi-Wan"
                />
            </h1>
            <Outlet />
        </>
    )
}

export default Error