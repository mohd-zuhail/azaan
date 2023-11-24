import React from "react";
import { createComponent, Frontend } from "@skyslit/ark-frontend";
import "./prayer-times.scss";
import { Col, Row, Typography, Form, Button, Input, message, Spin, Divider, Space, Modal, Menu, MenuProps, Select } from "antd";
import Fade from "react-reveal/Fade";
import Icon, { LoadingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default createComponent((props) => {

  const { useService } = props.use(Frontend);

  const fetchTimingsService = useService({ serviceId: "fetch-timings" });

  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const [tableData, setTableData] = React.useState({});
  console.log("tableData", tableData)

  const fetch = React.useCallback(() => {
    fetchTimingsService.invoke(
      {
        country: country,
        city: city
      },
      { force: true })
      .then((res) => {
        setTableData(res.data.data.timings);
        console.log("resssss", res)
      })
      .catch(() => {
      })
  }, [country, city, tableData])


  console.log("ggg", tableData)

  const LoaderExample = () => {
    const [loading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true); // Show the loader

      // Simulate some asynchronous task (e.g., API call, data processing)
      setTimeout(() => {
        setIsLoading(false); // Hide the loader after the task is complete
      }, 2000); // Adjust the timeout based on your needs
    };
  }



  return (
    <>
      <Fade duration={800}>
        <Row className="first-row-wrapper" justify="center">
          <Col xl={20} lg={20} md={22} sm={22} xs={22}>
            <div className="btn-wrapper">
              <Link to="/azaan" type="text" className="back-btn-islam">Back</Link>
            </div>
            <div className="main-prayer-wrapper">
              <span className="heading">Prayer Times</span>
              <Input className="input-prayerTimes" value={city}
                onPressEnter={fetch}
                onChange={(e) => { setCity(e.target.value) }} placeholder="Search for a Places" />
              <Button className="search-btn" /* onClick={handleClick} */ type="text" onClick={fetch}>
                {fetchTimingsService.isLoading ? <LoadingOutlined /> : 'Search'}
              </Button>
            </div>
            <div style={{paddingBottom:"10px"}}>
              <span className="location-text">Prayer Times at:</span>
            </div>
            <div className="prayer-tble-wrapper">
              <table className="cinereousTable">
                <thead>
                  <tr>
                    <th>Fajr</th>
                    <th>Dhuhr</th>
                    <th>Asar</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{tableData?.Fajr}</td>
                    <td>{tableData?.Dhuhr}</td>
                    <td>{tableData?.Asr}</td>
                    <td>{tableData?.Maghrib}</td>
                    <td>{tableData?.Isha}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Fade>
    </>
  );
});