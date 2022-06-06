import { useState } from "react";

const TableForm = ({cancelForm, submitForm}) => {

    const [formAddTable, setFormAddTable] = useState({ id: '', tableNumber: '', status: '' });
    // const [isValid, setIsValid] = useState(false)

    const handleChangeId = (e) => {
        setFormAddTable({ ...formAddTable, id: e.target.value })
    }

    const handleChangeTableNumber = (e) => {
        setFormAddTable({ ...formAddTable, tableNumber: e.target.value })
    }

    const handleChangeStatus = (e) => {
        setFormAddTable({ ...formAddTable, status: e.target.value })
    }

    const handleCancel = () => {
        cancelForm()
    }

    const handleSubmit = (e) => {
        submitForm(formAddTable)
        e.preventDefault()
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputId">Id Table</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputId"
                            placeholder="Enter Id"
                            onChange={handleChangeId}
                        />
                        <label htmlFor="inputName">Number Table</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputNumberTable"
                            placeholder="Enter Number Table"
                            onChange={handleChangeTableNumber}
                        />
                        <label htmlFor="inputPrice">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputStatus"
                            placeholder="Enter Status"
                            onChange={handleChangeStatus}
                        />
                    </div>
                    <br />
                    <button type="button" className="btn btn-warning" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default TableForm;