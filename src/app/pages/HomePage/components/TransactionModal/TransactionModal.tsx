import React, { useEffect } from 'react';
import { Modal } from '../../../../components/Modal';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { FormBox } from './styles';
import { IUser } from '../../../../../core/reducers/userReducer';
import { useFormik } from 'formik';
import schema from './validation/index';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { AppState } from '../../../../../core/reducers/rootReducer';
import * as actionTypes from '../../../../../core/actionTypes/transactionsActionTypes';
import { saveTransaction } from '../../../../../core/actionCreators/transactionsActionCreators';

interface Props {
  user: IUser;
  isOpen: boolean;

  onClose(): void;

  onTransactionCreated(): void;
}

export const TransactionModal: React.FC<Props> = props => {
  const {
    user,
    isOpen,
    onClose,
    onTransactionCreated
  } = props;

  const isLoading = useSelector((state: AppState) => state.isLoading[actionTypes.SAVE_TRANSACTION]);
  const lastCreatedTransaction = useSelector((state: AppState) => state.transactions.lastCreatedTransaction);
  const currentCreatingTransactionType = useSelector((state: AppState) => state.transactions.currentCreatingTransactionType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      formik.setFieldValue('type', currentCreatingTransactionType);
      formik.setFieldValue('sourceAccountNumber', user.account.accountNumber);
    }
  }, [isOpen]);

  useEffect(() => {
    if (lastCreatedTransaction && !isLoading) {
      onTransactionCreated();
      formik.resetForm();
    }
  }, [isLoading, lastCreatedTransaction]);

  const formik = useFormik({
    validationSchema: schema,
    validateOnChange: true,
    initialValues: {
      id: null,
      sourceAccountNumber: user.account.accountNumber,
      targetAccountNumber: '',
      amount: 0,
      createdAt: null,
      updatedAt: null,
      type: currentCreatingTransactionType
    },
    onSubmit: (values) => {
      dispatch(saveTransaction(values));
    }
  });

  const handleCurrencyOnValueChange = (event: string | undefined, value: string | undefined): void => {
    if (event) {
      formik.setFieldValue('amount', value);
    }
  };

  const whenCallOnClose = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <div>
      <Modal showDividers={false}
             open={isOpen}
             title={`New ${currentCreatingTransactionType}`}
             maxWidth={'xs'}
             onClose={onClose}
             actionElements={(
               <>
                 <Button color="primary" onClick={whenCallOnClose}>
                   Cancel
                 </Button>
                 <Button color="primary" onClick={formik.submitForm}>
                   Save
                 </Button>
               </>
             )}>
        <Grid>
          <FormBox textAlign="center">
            <Box p={1}>
              <Grid container>
                {currentCreatingTransactionType === 'payment' && (
                  <Grid item xs={12} sm={12} md={12}>
                    <Box mb={2}>
                      <TextField
                        id="targetAccountNumber"
                        label="Destination Account"
                        name="targetAccountNumber"
                        variant="outlined"
                        data-testid="targetAccountNumber"
                        size="small"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.targetAccountNumber}
                        error={formik.touched.targetAccountNumber && !!formik.errors.targetAccountNumber}
                        helperText={
                          (formik.touched.targetAccountNumber && !!formik.errors.targetAccountNumber) ? formik.errors.targetAccountNumber : null
                        }
                      />
                    </Box>
                  </Grid>)}
                <Grid item xs={12} sm={12} md={12}>
                  <Box mb={2}>
                    <CurrencyTextField
                      label="Amount"
                      id="amount"
                      name="amount"
                      size="small"
                      fullWidth
                      variant="outlined"
                      textAlign="left"
                      value={formik.values.amount}
                      currencySymbol="$"
                      minimumValue="0"
                      outputFormat="number"
                      decimalCharacter="."
                      digitGroupSeparator=","
                      onChange={handleCurrencyOnValueChange}
                      error={formik.touched.amount && !!formik.errors.amount}
                      helperText={
                        (formik.touched.amount && !!formik.errors.amount) ? formik.errors.amount : null
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </FormBox>
        </Grid>

      </Modal>
    </div>
  );
};
