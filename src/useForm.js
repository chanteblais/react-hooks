import { useState } from 'react'

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    console.log("Email: " + values.email)
    console.log("Password: " + values.password)

    return [
        values, 
        e => {
          setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
  ]
}