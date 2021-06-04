import * as Yup from 'yup';

const schema = Yup.object()
  .shape({
    email: Yup.string()
      .email()
      .required('Enter valid email.'),
    password: Yup.string()
      .min(8)
      .required('Please enter a valid password.')
  });

export default schema;
