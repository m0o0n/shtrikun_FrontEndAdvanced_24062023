import { useState } from "react"
import { connect } from "react-redux"

const ContactForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        number: '',
    })
    const handleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleAddContact = () => {
        props.addContact(formData)
        props.onCancel()
        setFormData({
            name: '',
            lastname: '',
            number: '',
        })
    }
    return (
        <form onSubmit={handleSubmit} className="contactForm">
            <label htmlFor="name">Please enter name</label>
            <input value={formData.name} onChange={handleChange} type='text' name="name" id="name" />

            <label htmlFor="lastname">Please enter lastname</label>
            <input value={formData.lastname} onChange={handleChange} type='text' name="lastname" id="lastname" />

            <label htmlFor="number">Please enter number</label>
            <input value={formData.number} onChange={handleChange} type='text' name="number" id="number" />
            <div className="contactForm__buttons">
                <button onClick={handleAddContact}>Add Contact</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}
const mapDispatch = (dispatch) => {
    return {
        addContact: (formData) => {
            dispatch({ type: 'ADD_CONTACT', payload: formData })
        }
    }
}
const mapState = (state) => {
    return state
}
export default connect(mapState, mapDispatch)(ContactForm)