import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as Actions from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  buttons: {
    margin: "2px",
    padding: "5px",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");

  const View = useSelector(({ useReducer }) => useReducer.myData);
  var nowURL = "foo.com";
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        backgroundColor: "#444",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontFamily: "Arial",
          fontSize: "400",
          fontWeight: "700",
          color: "white",
          textShadow: "0px 0px 20px 0px black",
        }}
      >
        Hello It's Me {View}! ;)
      </h1>

      <div>
        <TextField
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          color="secondary"
        />
      </div>
      <div style={{ margin: "15px" }}>
        <Button
          // className={classes.buttons}
          onClick={() => {
            dispatch(Actions.setName(Name));
            setName("");
          }}
          variant="contained"
          color="secondary"
        >
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default App;
