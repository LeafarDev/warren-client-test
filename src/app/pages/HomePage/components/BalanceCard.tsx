import React from 'react';
import { BalanceGrid } from '../styles';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import currency from 'currency.js';
import { toFixed } from '../../../utils/number';

interface Props {
  amount: number;
  title: string;
}

export const BalanceCard: React.FC<Props> = props => {
  const {
    amount,
    title
  } = props;

  return (
    <BalanceGrid item xs={12} sm={6} md={3}>
      <Grid>
        <Grid item xs={12} sm={12}>
          <Card variant="outlined">
            <CardContent>
              <Box display={'flex'} alignContent={'center'} alignItems={'center'}
                   flexDirection={'column'}>
                <Typography color="textSecondary" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="h4" component="h2">
                  {`${currency(toFixed(amount, 2), {
                    decimal: '.',
                    precision: 2
                  })
                    .format()}`}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </BalanceGrid>
  );
};
