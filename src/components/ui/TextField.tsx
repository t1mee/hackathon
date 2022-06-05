import React from "react";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      border: "1px solid #ECE8F2",
      borderRadius: 16,
      "& input:placeholder": {
        fontWeight: 300,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: theme.typography.pxToRem(18),
        color: "#6A6A6A",
      },
      "&.Mui-focused > fieldset ": {
        borderColor: "#6824EA",
      },
      "&:hover > fieldset ": {
        borderColor: "#6824EA",
      },
    },
  },
}));

const TextField: React.FC = ({ children, ...props }: TextFieldProps) => {
  const { classes } = useStyles();

  return (
    <MuiTextField className={classes.root} {...props}>
      {children}
    </MuiTextField>
  );
};

export default TextField;
