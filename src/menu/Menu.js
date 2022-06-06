import { useState } from "react";
import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

const Menu = ({cbSubmitMenu, menus}) => {

    const [addedForm, setAddedForm] = useState(false);

    const handleSubmit = (data) => {
        setAddedForm(false)
        cbSubmitMenu(data)
    }

    const handleCancel = () => {
        setAddedForm(false)
    }

    const changeToForm = () => {
        setAddedForm(true)
    }

    return (
        <>
            {addedForm ? <MenuForm submitForm={handleSubmit} cancelForm = {handleCancel}/>: <MenuList menus={menus} addedFormCB={changeToForm}/>}
        </>
    )
}

export default Menu;