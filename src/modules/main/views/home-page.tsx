import React from "react";
import { createComponent, Frontend } from "@skyslit/ark-frontend";
import "./home-page.scss";
import { Col, Row, Typography, Form, Button, Input, message, Spin, Divider, Space, Modal, Menu, MenuProps, Radio } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {
  PlusOutlined,
} from '@ant-design/icons';
import MosqueLogo from "../assets/images/mosquelogo.png"
import moment from "moment";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import type { RadioChangeEvent } from 'antd';

export default createComponent((props) => {

  const [currentTime, setCurrentTime] = React.useState(new Date());

  const { useService } = props.use(Frontend);

  const fetchTimingsService = useService({ serviceId: "fetch-timings" });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    fetchTimingsService.invoke(
      {},
      { force: true })
      .then((res) => {
        console.log("resssss", res)
      })
      .catch(() => {
      })
  }, [])



  const [prayerTimes, setPrayerTimes] = React.useState({});
  const [location, setLocation] = React.useState('28.6139,77.2090');


  const [open, setOpen] = React.useState(false);
  const [newModalOpen, setNewModalOpen] = React.useState(false);

  const duas = [
    {
      duaHeading: "Dua Before eating Food:",
      dua: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
      duaTrans: "In the name of Allah and with the blessings of Allah I begin (eating)."
    },
    {
      duaHeading: "Dua After finishing a meal:",
      dua: "الْحَمْدُ لِلَّهِ الَّذِى اطْعَمَنَا وَسَقَانَا ، وَجَعَلنَا مُسْلِمِينَ",
      duaTrans: "Praise be to Allah Who has fed us and given us drink and made us Muslims."
    },
    {
      duaHeading: "Dua before Sleeping:",
      dua: "اَللّهُمَّ بِسْمِكَ أَمُوْتُ وَ أَحْيَ",
      duaTrans: "Oh Allah, I live and die calling your name."
    },
    {
      duaHeading: "Dua After Waking Up:",
      dua: "الحَمْـدُ لِلّهِ الّذي أَحْـيانا بَعْـدَ ما أَماتَـنا وَإليه النُّـشور",
      duaTrans: "Praise is to Allah Who gives us life after He has caused us to die and to Him is the return."
    }
  ];


  const [radioValue, setRadioValue] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };


  return (
    <>
      <div className="azaan"><Fade left><span className="app-name">AZAAN</span></Fade></div>
      <Fade>
        <Row className="first-check-row-wrapper" justify="center">
          <Col className="first-check-col-wrapper" xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className="bg-wrapper">
              {/* <div className="timer">
             <span className="time">{currentTime.toLocaleTimeString()}</span> 
            </div> */}
            </div>
            <div className="options-whole-wrapper">
              <div className="options-wrapper">
                <Button className="option-1">
                  <Link to="/azaan/prayer" className="text" >Prayer Time</Link>
                </Button>
                <Button href="https://quran.com/" target="_blank" className="option-1">
                  <span className="text">Al-Quran</span>
                </Button>
                <Button href="https://qiblafinder.withgoogle.com/intl/en/desktop" target="_blank" className="option-1">
                  <span className="text">Qibla</span>
                </Button>
              </div>
              <div className="options-wrapper">
                <Button href="https://www.google.com/maps/search/mosque+near+me/@8.4759895,76.9465924,14z/data=!3m1!4b1?entry=ttu" target="_blank" className="option-1">
                  <span className="text">Masjid Finder</span>
                </Button>
                <Button href="https://www.al-habib.info/islamic-calendar/ummulqura/islamic-calendar-ummulqura-2023-ce.htm" target="_blank" className="option-1">
                  <span className="text">Arabic Calender</span>
                </Button>
                <Button type="text" className="option-1">
                  <span onClick={() => setNewModalOpen(true)} className="text">Prayer Reminder</span>
                  <Modal
                    title="do you want to enable Prayer Reminder?"
                    centered
                    footer={null}
                    open={newModalOpen}
                    onOk={() => setNewModalOpen(false)}
                    onCancel={() => setNewModalOpen(false)}
                    width={1000}

                  >
                    <Radio.Group onChange={onChange} value={radioValue}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={2}>No</Radio>
                    </Radio.Group>
                  </Modal>
                </Button>
              </div>
              <div className="options-wrapper">
                <Button type="text" className="option-1">
                  <span onClick={() => setOpen(true)} className="text">Duas</span>
                  <Modal
                    title="Duas"
                    centered
                    footer={null}
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                  >
                    <div className="dua-wrappers">
                      <p className="ramadaniya-duas">Dua Categories</p>
                      {duas.map((dua, index) => {
                        return (
                          <div key={index}>
                            <p style={{ fontSize: "18px", textAlign: "left", marginBottom: "1em", fontWeight: "600" }}>{dua.duaHeading}</p>
                            <p style={{ fontSize: "23px" }}>{dua.dua}</p>
                            <p style={{ fontSize: "14px", textAlign: "right", marginBottom: "3em", lineHeight: "20px" }}>{dua.duaTrans}</p>
                          </div>
                        )
                      })}
                    </div>
                  </Modal>
                </Button>
                <Button href="/azaan/islam" className="option-1">
                  <span className="text">5 Pillars</span>
                </Button>
                <Button className="option-1" href="https://www.youtube.com/watch?v=vx1rz-28HNk" target="_blank">
                  <span className="text">Tasbeeh</span>
                </Button>
              </div>

            </div>

          </Col>
          <Fade duration={3000}>
            <Col className="second-row-wrapper" xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="about-us-wrapper">
                <div className="whole-wrapper">
                  <h1 className="label">Our Mission</h1>
                  <span className="text-about-us">At Your <b>Azaan app</b>, our mission is to make practicing Islam and staying connected with your faith more accessible, convenient, and meaningful. We recognize the significance of daily prayers, and our app is crafted to assist you in effortlessly managing your prayer routines, regardless of your location.</span>
                </div>
                <div className="whole-wrapper">
                  <h1 className="label">About Us</h1>
                  <span className="text-about-us">Welcome to <b>Azaan app</b>, your trusted companion for all your Islamic prayer needs. We are dedicated to providing a seamless and enriching experience for Muslims around the world, fostering a deeper connection with their faith and prayer obligations.</span>
                </div>
              </div>
            </Col>
          </Fade>
        </Row>
      </Fade>
    </>
  );
});

