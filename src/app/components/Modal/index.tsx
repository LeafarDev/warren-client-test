import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface Props {
  maxWidth: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  actionElements: React.ReactNode;
  children: React.ReactNode;
  showDividers: boolean;
  open: boolean;
  title: string;

  onClose(): void;

}

export const Modal: React.FC<Props> = props => {

  const {
    maxWidth,
    children,
    actionElements,
    showDividers,
    title,
    onClose,
    open
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        fullWidth={true}
        maxWidth={maxWidth}
        onExit={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent dividers={showDividers}>
          {children}
        </DialogContent>
        <DialogActions>
          {actionElements}
        </DialogActions>
      </Dialog>
    </div>
  );
};
