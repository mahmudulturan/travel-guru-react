import {Outlet} from 'react-router-dom'
const RootElement = () => {
    return (
        <div className='font-mont'>
            <Outlet></Outlet>
        </div>
    );
};

export default RootElement;