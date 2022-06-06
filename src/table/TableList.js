const TableList = ({addedFormCB, tables}) => {
    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={addedFormCB}>Tambah Table</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Table Number</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tables.map((table, index) => {
                                return (
                                    <tr key={table.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{table.tableNumber}</td>
                                        <td>{table.status}</td>
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

export default TableList;