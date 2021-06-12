import { makeStyles } from "@material-ui/core/styles";

export const getCustomStyle = (customClasses) => {
  return makeStyles({
    ...customClasses,
  });
};
