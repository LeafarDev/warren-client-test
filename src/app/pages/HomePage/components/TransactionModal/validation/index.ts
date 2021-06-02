import * as Yup from 'yup';

const schema = Yup.object()
  .shape({
    sourceAccountNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Account must  be only digits')
      .length(8)
      .required('Please enter a valid source account number'),
    targetAccountNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Account destination must be only digits')
      .length(8, 'Account destination must be exactly 8 characters')
      .when('type', {
        is: 'payment',
        then: Yup.string()
          .required('Please enter a valid destination account number')
      }),
    amount: Yup.number()
      .moreThan(0)
      .required('Please enter a valid amount'),
    type: Yup.string()
      .required('Please enter a valid transaction type')
  });

export default schema;
