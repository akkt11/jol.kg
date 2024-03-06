import React from 'react'
import {
    Container,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text,
    Form
} from './SigninElements'
import { toast } from 'react-toastify'

const Signin = ({ setAuth }) => {
    const [inputs, setInputs] = React.useState('')

    const { email, password } = inputs

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: (e.target.value) })
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { email, password }
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            const parseRes = await response.json()

            if (parseRes.token) {
                localStorage.setItem('token', parseRes.token)
                setAuth(true)
                toast.success('You were logged in successully!')
            } else {
                setAuth(false)
                toast.error(parseRes)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>
                        jol.kg
                    </Icon>
                    <FormContent>
                        <Form action='#' onSubmit={onSubmitForm}>
                            <FormH1>
                                Войти в аккаунт
                            </FormH1>

                            <FormLabel htmlFor='for'>
                                Email
                            </FormLabel>

                            <FormInput 
                            type='email' 
                            name='email'
                            required 
                            value={email}
                            onChange={e => onChange(e)} />

                            <FormLabel htmlFor='for'>
                                Password
                            </FormLabel>

                            <FormInput 
                            type='password' 
                            name='password'
                            required 
                            value={password}
                            onChange={e => onChange(e)} />

                            <FormButton type='submit'>
                                Продолжить
                            </FormButton>

                            <Text to='/signup'>Нет аккаунта?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin