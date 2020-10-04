import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '1',
  },
  {
    value: 20,
    label: '2',
  },
  {
    value: 30,
    label: '3',
  },
  {
    value: 40,
    label: '4',
  },
  {
    value: 50,
    label: '5',
  },
  {
    value: 60,
    label: '6',
  },
  {
    value: 70,
    label: '7',
  },
  {
    value: 80,
    label: '8',
  },
  {
    value: 90,
    label: '9',
  },
  {
    value: 100,
    label: '10',
  },
];
function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) ;
}

export default function QuickScan() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Quick Scan
      </Typography>

      <Typography gutterBottom style={{ margin: "10px" }}>
        Please tell us about your complaint
      </Typography>

      <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Chest Pain"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

      <Typography gutterBottom style={{ margin: "10px" }}>
        Select the severity of your chest pain
      </Typography>
      <Typography id="discrete-slider-restrict" gutterBottom style={{ margin: "10px" }}>
        Severity
      </Typography>
      <Slider
        defaultValue={70}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        
      />

      <Typography id="discrete-slider-restrict" gutterBottom style={{ margin: "10px" }}>
        Frequency
      </Typography>
      <Slider
        defaultValue={50}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />

    </React.Fragment>
  );
}
