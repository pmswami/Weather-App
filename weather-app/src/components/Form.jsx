import { Box, Button, InputBase, styled } from "@mui/material";
import React, { useState } from "react";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  background: "#445A6F",
  padding: 10,
});

const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

function Form(props) {
  const [data, setData] = useState({ city: "", country: "" });
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    // console.log(response);
    props.setResult(response);
  };
  return (
    <Container>
      <Input placeholder="City" name="city" onChange={(e) => handleChange(e)} />
      <Input placeholder="Country" name="country" onChange={handleChange} />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
}

export default Form;
