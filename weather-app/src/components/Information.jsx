import React from "react";
import { Box, Typography, styled } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import OpacityIcon from "@mui/icons-material/Opacity";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloudIcon from "@mui/icons-material/Cloud";

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  "& > svg": {
    marginRight: 10,
  },
});

const Error = styled(Typography)({
  color: "red",
  margin: "50",
  padding: "20px",
});

function Information(props) {
  return props.result && Object.keys(props.result).length > 0 ? (
    <Box style={{ margin: "30px 60px" }}>
      <Row>
        {" "}
        <LocationOnIcon /> {props.result.name}, {props.result.sys.country}
      </Row>
      <Row>
        <SettingsBrightnessIcon />
        Temperature: {props.result.main.temp}
      </Row>
      <Row>
        <OpacityIcon />
        Humidity: {props.result.main.humidity}
      </Row>
      <Row>
        <Brightness5Icon />
        Sunrise:{" "}
        {new Date(props.result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6Icon />
        Sun Set: {new Date(props.result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <DehazeIcon />
        Humidity: {props.result.weather[0].main}
      </Row>
      <Row>
        <CloudIcon />
        Clouds: {props.result.clouds.all}%
      </Row>
    </Box>
  ) : (
    <Error>Please enter the values to check weather</Error>
  );
}

export default Information;
