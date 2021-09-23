import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import {
    createUser
} from "../service/userService"

import '../styles/CreateUser.css';

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="ton-createuser-input-wrapper">
            <label htmlFor={props.id || props.name}>{label}</label>
        </div>
        <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
            ) : null}
      </>
    );
  };
  
  const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const CreateUser = () => {
    return (
    <div style={{
        display: "block",
        margin:"30px",
        fontSize:"24px"
    }}>
        <Formik
          initialValues={{
            username: '',
            password: '',
            email: '',
            cpf: '', // added for our select
            acceptedTerms: false, // added for our checkbox
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .min(6, 'Tamanho mínimo de 6 letras')
              .max(12, 'Tamanho máximo de 12 letras')
              .required('Nome de usuário obrigatório'),
            password: Yup.string()
            .required('Senha é obrigatória')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                "Deve conter 8 Caracteres, uma letra maiúscula, uma minúscula e um número"
              ),
            email: Yup.string()
              .email('E-mail inválido')
              .required('E-mail é Obrigatório'),
            cpf: Yup.string()
            .required('Obrigatório')
            .matches(
                /^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$/,
                "Cpf deve estar no formato 111.111.111-11"
            ),
            acceptedTerms: Yup.boolean()
              .required('Obrigatório')
              .oneOf([true], 'Aceitar os termos é obrigatório'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            createUser(values)
          }}
        >
          <Form>
            <div style={{marginBottom:"10px"}}>
                <Input
                label="Nome de Usuário:"
                name="username"
                type="text"
                placeholder="Seu nome de usuário"
                />
            </div>
            <div style={{marginBottom:"10px"}}>
                <Input
                label="Senha:"
                name="password"
                type="text"
                placeholder="Sua Senha"
                />
            </div>
            <div style={{marginBottom:"10px"}}>
                <Input
                label="E-mail:"
                name="email"
                type="email"
                placeholder="exemplo@exemplo.com"
                />
            </div>
            <div style={{marginBottom:"10px"}}>
                <Input
                label="CPF:"
                name="cpf"
                type="text"
                placeholder="111.111.111-56"
                />
            </div>
            <div style={{marginBottom:"50px"}}>
                <Checkbox name="acceptedTerms">
                <span style={{marginLeft:"10px"}}>
                    Aceito os termos e condições
                </span>
                </Checkbox>
            </div>
            <button type="submit">Enviar</button>
          </Form>
        </Formik>
    </div>
    );
  };

  export default CreateUser;