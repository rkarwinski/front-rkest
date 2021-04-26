import { connect } from 'react-redux'
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { submitParameterAction } from '../../actions/parameter/ParameterAction'

const ParameterFormFunc = props => {

    const {handleSubmit} = props 

    const submit = (data, submitParameterAction) => {
        submitParameterAction(data)
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitParameterAction))}>
            <label>Nome</label>
            <Field 
            type="text"
            name="nome"
            component="input"
            />
            <label>Valor</label>
            <Field 
            type="text"
            name="valor"
            component="input"
            />
            <button type="submit"> Enviar </button>
        </form>
    );
}

const ParameterForm = (reduxForm({
    form:'ParameterForm'
}))(ParameterFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {submitParameterAction})(ParameterForm)