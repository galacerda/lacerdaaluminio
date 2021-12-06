import { Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";
import * as S from "./styled";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = ({
  open = true,
  handleClose,
  message = "Simple Message",
  type = "success",
}) => {
  return (
    <S.Wrapper>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={type}
          sx={{ width: "100%" }}
          action={
            <>
              <IconButton size="medium" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="big" />
              </IconButton>
            </>
          }
        >
          {message}
        </Alert>
      </Snackbar>
    </S.Wrapper>
  );
};

export default SnackBar;
