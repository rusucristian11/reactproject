import {NavLink} from "react-router-dom";


const AppHeader = () => {
    return (
        <div className='app-header'>
            <NavLink to='/toDo' className='header-link'>
                <div>
                    Task Tracker
                </div>
            </NavLink>
            <NavLink to='/calculatorApp' className='header-link'>
                <div>
                    Calculator App
                </div>
            </NavLink>
        </div>
    )
}

export default AppHeader
