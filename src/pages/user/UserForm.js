import { connect } from 'react-redux'
import React from 'react'
import { reduxForm } from 'redux-form'

const UserFormFunc = props => {
    return (
        <form>
            <label>Nome</label>
            <input 
            type="text"
            name="nome"
            component="input"
            />
            <label>Email</label>
            <input 
            type="email"
            name="email"
            component="input"
            />
        </form>
    );
}

const UserForm = (reduxForm({
    form:'formUser'
}))(UserFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm)