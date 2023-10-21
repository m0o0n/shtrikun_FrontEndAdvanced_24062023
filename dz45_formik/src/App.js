
import './App.css';
import { Formik } from 'formik';
function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ email: '', name: '', phone: '' }}
        validate={validateAppForm}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <InputText
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              errors={errors}
              touched={touched}
            />

            <InputText
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errors={errors}
              touched={touched}
            />

            <InputText
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              errors={errors}
              touched={touched}
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}


const InputText = (props) => {
  const { errors, touched, name } = props
  return (
    <div>
      <input
        {...props}
      />
      <div>
        {errors[name] && touched[name] && errors[name]}
      </div>
      
    </div>
  )
}

const validateAppForm = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (
    !/\d{12}/.test(values.phone)
  ) {
    errors.phone = 'Phone must be 12 digits'
  }
  return errors;
}

export default App;
