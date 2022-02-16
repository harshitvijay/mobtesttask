import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  userCard: {
    backgroundColor: "#87f1f1 !important",
    width: "20vw",
    height: "auto",
    marginTop: "5%",
    display: "flex !important",
    justifyContent: "center",
  },
  userCardContent: {},
  ImageContainer: {
    width: "150px",
    height: "150px",
    marginTop: "20%",
  },
  userImage: {
    width: "100%",
    objectFit: "cover",
  },
  userName: {
    color: "#2ccccc",
    fontSize: "1.2rem !important",
    marginTop: "30% !important",
  },
  userEmail: {
    fontWeight: "bold !important",
    marginTop: "30% !important",
  },
});

export default useStyles;
