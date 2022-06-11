import React from 'react';
import { Button, Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './modal.styles';

const Modal = ({
                 title = '',
                 onClose = () => {},
                 className,
                 children,
                 white,
                 hideCloseButton = false,
                 ...props
               }) => {
  const classes = useStyles();
  return (
    <Dialog
      PaperProps={{ className: [classes.wrapper, className] }}
      onClose={onClose}
      aria-labelledby={title}
      {...props}
    >
      <div className={classes.header}>
        <div className={classes.title}>{title}</div>
        {!hideCloseButton && (
          <Button
            className={classes.closeButton}
            variant="text"
            startIcon={<CloseIcon />}
            onClick={onClose}
          >
            Close
          </Button>
        )}
      </div>
      {children}
    </Dialog>
  );
};

export default Modal;
