import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './PatientReg.css'


export default function AddressForm() {

  const [useMedAssistId, SetUseMedAssistId] = React.useState(true);

  const handleChange = () => SetUseMedAssistId(!useMedAssistId);

  const [otpSent, SetOtpSent] = React.useState(false);

  const handleSubmitOtp = () => SetOtpSent(true);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patient Information
      </Typography>
      
      <ToggleButtonGroup 
        type="radio" 
        name="options" 
        defaultValue={true} 
        value={useMedAssistId} 
        onChange={handleChange}
        className="toggle-button"
        >
        <ToggleButton variant="primary" value={true} >Use MedAssist ID</ToggleButton>
        <ToggleButton variant="primary" value={false} >Fill Manually</ToggleButton>
      </ToggleButtonGroup>
      { useMedAssistId
        ? 
        <div> 
          { !otpSent ?
            <Form>
              <Form.Group controlId="formEnterId">
                <Form.Label>Please Enter your MedAssist ID or registered Email/Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="MedAssist ID / Email / Mobile No" />
                <Form.Text className="text-muted">
                  We'll fetch all your medical information from your MedAssist Account.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleSubmitOtp}>
                Send OTP
              </Button>
            </Form>
          :
            <Form>
              <Form.Group controlId="FormEnterOtp">
                <Form.Label>Please Enter the OTP sent to your registered Email/Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="One Time Password (OTP)" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Confirm OTP
              </Button>
            </Form>
          }
        </div>
        :
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          </Grid>
        </div>
      } 
    </React.Fragment>
  );
}
