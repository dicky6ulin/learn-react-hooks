import { useState } from "react";

const MenuForm = ({ cancelForm, submitForm }) => {

    const [formAddMenu, setFormAddMenu] = useState({ id: '', name: '', price: '' });

    const handleChangeId = (e) => {
        setFormAddMenu({ ...formAddMenu, id: e.target.value })
    }

    const handleChangeName = (e) => {
        setFormAddMenu({ ...formAddMenu, name: e.target.value })
    }

    const handleChangePrice = (e) => {
        setFormAddMenu({ ...formAddMenu, price: e.target.value })
    }

    const handleCancel = () => {
        cancelForm()
    }

    const handleSubmit = (e) => {
        submitForm(formAddMenu)
        e.preventDefault()
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputId">Id Menu</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputId"
                            placeholder="Enter Id"
                            onChange={handleChangeId}
                        />
                        <label htmlFor="inputName">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder="Enter Name"
                            onChange={handleChangeName}
                        />
                        <label htmlFor="inputPrice">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPrice"
                            placeholder="Enter Price"
                            onChange={handleChangePrice}
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

export default MenuForm;