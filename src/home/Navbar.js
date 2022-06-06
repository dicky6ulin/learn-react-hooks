import { useState } from "react";
import Menu from "../menu/Menu";
import Table from "../table/Table";
import Home from "./Home";

const Navbar = ({callback}) => {

    const [navbar, setNavbar] = useState('');
    const [menus, setMenus] = useState([
        {
            id: "001",
            name: "Ayam Geprek",
            price: "Rp.25000,00",
        }
    ]);
    const [tables, setTables] = useState([
        {
            id: "001",
            tableNumber: "001",
            status: "Available",
        }
    ]);

    const handleNavbar = (nav) => {
        setNavbar(nav)
    }

    const logout = () => {
        callback();
    }

    const handleSubmitMenu = (data) => {
        setMenus([...menus, data])
    }

    const handleSubmitTable = (data) => {
        setTables([...tables, data])
    }

    let showMenu = '';
    if (navbar === '') {
        showMenu = <Home />
    } else if (navbar === 'menus') {
        showMenu = <Menu menus={menus} cbSubmitMenu={handleSubmitMenu} />
    } else if (navbar === 'tables') {
        showMenu = <Table tables={tables} cbSubmitTable={handleSubmitTable} />
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#a">Bakari</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#a" aria-current="page" onClick={() => handleNavbar('')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#a" onClick={() => handleNavbar('menus')}>Menus</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#a" onClick={() => handleNavbar('tables')}>Tables</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-danger" href="#a" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showMenu}
        </>
    )
}


export default Navbar;