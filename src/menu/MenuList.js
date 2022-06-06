const MenuList = ({menus, addedFormCB}) => {
    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={addedFormCB}>Tambah Menu</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((menu, index) => {
                                return (
                                    <tr key={menu.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{menu.name}</td>
                                        <td>{menu.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MenuList;