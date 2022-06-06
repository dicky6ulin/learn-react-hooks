import { useState } from "react";
import TableForm from "./TableForm";
import TableList from "./TableList";

const Table = ({cbSubmitTable, tables}) => {

    const [addedForm, setAddedForm] = useState(false);

    const handleSubmit = (data) => {
        setAddedForm(false)
        cbSubmitTable(data)
    }

    const handleCancel = () => {
        setAddedForm(false)
    }

    const changeToForm = () => {
        setAddedForm(true)
    }
    return (
        <>
            {addedForm ? <TableForm submitForm={handleSubmit} cancelForm = {handleCancel}/>: <TableList tables={tables} addedFormCB={changeToForm}/>}
        </>
    )
}

export default Table;