import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const Paper = styled.div`
  && {
    margin: 24px 0px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CustomAvatar = styled(Avatar)`
  && {
    margin: 8px;
    background-color: #e61b5d;
  }
`;

export const CustomForm = styled.form`
  && {
    width: 100%;
    margin-top: 8px;
  }
`;

export const ButtonSubmit = styled(Button)`
  && {
    background-color: #e61b5d;

    :hover {
      background-color: #c7376d;
    }

    margin: 24px 0px 16px;
  }
`;


