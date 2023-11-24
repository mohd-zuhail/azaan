import React from "react";
import { createComponent, Frontend } from "@skyslit/ark-frontend";
import "./islam-pillars.scss";
import { Col, Row, Typography, Form, Button, Input, message, Spin, Divider, Space, Modal, Menu, MenuProps, Select } from "antd";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";


export default createComponent((props) => {

  return (
    <>
      <Fade duration={1200}>
        <Row className="pillars-row-wrapper" justify="center">
          <Col xl={20} lg={20} md={22} sm={22} xs={22}>
            <div className="islam-wrapper">
              <Link to="/azaan" type="text" className="back-btn-islam">Back</Link>
              <h1 className="heading-pillar">Five Pillars of Islam</h1>
              <div className="content-pillar-wrapper">
                <h3 className="overview-heading">Overview of the Five Pillars of Islam</h3>
                <span className="overview-text">
                  The Five Pillars of Islam are fundamental obligations practiced by Muslims worldwide,
                  reflecting a commitment to following Prophet Muhammad's life. These include declarations of faith,
                  prayer, fasting during Ramadan, charity, and pilgrimage to Mecca. While these pillars are central, not all Muslims observe them equally. Some, like the Alevis, follow alternative practices, such as the Four Doors system. Mosques and cultural expressions emerged as symbols of Islamic faith after the Muslim Arabs conquered new lands. The Quran and Hadith detail these pillars, emphasizing monotheism and aligning these practices with the Prophet's life, despite similarities with pre-Islamic and other religious customs. The Quran references these obligations, though Hadith provides more specific guidance. The Quran touches on prayer, fasting in Ramadan, giving charity, and the Hajj pilgrimage, providing some details on these practices but elaborating further in the Hadith.
                </span>
              </div>
              <div className="content-pillar-wrapper">
                <h3 className="overview-heading">First pillar: Shahada (Declaration of Faith)</h3>
                <span className="overview-text">
                  The Shahada, the declaration of faith, stands as the first pillar of Islam, composed of two parts: "There is no god but God" and "Muhammad is the messenger of God." Uttered in Arabic: lā ʾilāha ʾillā-llāhu muḥammadun rasūlu-llāh (لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله), it's vital for embracing Islam or converting to it.
                  The initial phrase emphasizes the unity of faith, affirming the singular existence of God. Tawhid, encapsulated in this declaration, underlines Islam's monotheistic essence, uniting God as the source of all existence. The second phrase illustrates God's mercy, acknowledging Muhammad as the final prophet and the model guide for all Muslims. Muhammad, who received unaltered revelations, contrasts with earlier distorted messages from Jewish and Christian communities, carrying the Quran's guidance for the entire Muslim community across history.
                  Recited five times daily during prayer, the Shahada holds significant ritualistic importance, being the first words spoken to a newborn and the final words to a person on their deathbed. This underscores how Muslim prayers and the pillars shape every aspect of life, from birth to death.
                </span>
              </div>
              <div className="content-pillar-wrapper">
                <h3 className="overview-heading">Second Pillar: Salah (Prayer)</h3>
                <span className="overview-text">
                  The Shahada, the declaration of faith, stands as the first pillar of Islam, composed of two parts: "There is no god but God" and "Muhammad is the messenger of God." Uttered in Arabic: lā ʾilāha ʾillā-llāhu muḥammadun rasūlu-llāh (لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله), it's vital for embracing Islam or converting to it.
                  The initial phrase emphasizes the unity of faith, affirming the singular existence of God. Tawhid, encapsulated in this declaration, underlines Islam's monotheistic essence, uniting God as the source of all existence. The second phrase illustrates God's mercy, acknowledging Muhammad as the final prophet and the model guide for all Muslims. Muhammad, who received unaltered revelations, contrasts with earlier distorted messages from Jewish and Christian communities, carrying the Quran's guidance for the entire Muslim community across history.
                  Recited five times daily during prayer, the Shahada holds significant ritualistic importance, being the first words spoken to a newborn and the final words to a person on their deathbed. This underscores how Muslim prayers and the pillars shape every aspect of life, from birth to death.
                </span>
              </div>
              <div className="content-pillar-wrapper">
                <h3 className="overview-heading">Third Pillar: Zakat (Almsgiving)</h3>
                <span className="overview-text">
                  The Third Pillar of Islam, Zakāt, is about almsgiving or charity, symbolizing purification and growth. It involves giving a portion, typically around 2.5%, of one's wealth to support the Islamic community. Though not in the Quran, it's emphasized in the hadith. This contribution maintains holy places, aids the needy, and combats poverty, fostering balance and growth by recognizing that all belongs to God. Zakāt is obligatory for financially capable Muslims, reflecting personal responsibility to alleviate economic hardship and strive for equality.
                  Zakāt involves spending wealth for the benefit of the poor, debtors, or travelers. Additionally, Muslims engage in voluntary charity (sadaqah) beyond Zakāt for further divine reward. Supporting the poor directly on the streets is also encouraged. Five key principles govern Zakāt: an explicit intention to give, timely payment, avoiding excessive spending after giving, payment according to one's means, and distributing within the community it was taken from. These principles illustrate how Islam influences believers' financial aspects, integrating into all facets of life.
                </span>
              </div>
              <div className="content-pillar-wrapper">
                <h3 className="overview-heading">Fourth Pillar: Sawm (Fasting)</h3>
                <span className="overview-text">
                  The Fourth Pillar of Islam, Sawm or fasting, occurs during daylight hours in Ramadan, the Islamic calendar's holy month. As per the Quran, fasting starts at dawn and ends at sunset, abstaining from food, drink, sexual relations, and smoking. After sunset and before dawn, these restrictions are lifted. The aim is to remind Muslims of reliance on God and the less fortunate while fostering reflection, increased charity, and repentance.
                  Ramadan fasting concludes with "Id-ul-Fitr" (Festival of the Breaking of the Fast), celebrated for three days. The first day involves mosque gatherings for prayers and almsgiving by family heads.
                  Three types of fasting are recognized in the Quran: ritual, repentance-based, and ascetic fasting. Ritual fasting during Ramadan is obligatory for post-pubescent Muslims, except for health-related or specific conditions. Fasting aims to seek closeness to God, express gratitude, atone for sins, and empathize with the needy. During Ramadan, Muslims strive to adhere more closely to Islamic teachings, avoiding negative behaviors and enhancing relationships within the Muslim community. This includes refraining from anger, envy, profanity, and other inappropriate behavior.
                  Exceptions to fasting exist for groups for whom fasting could pose health risks or serious difficulties, such as pre-pubescent children, those with medical conditions, the elderly, pregnant or breastfeeding women, and menstruating women. Those who miss fasts due to valid reasons usually make them up later, with specific guidelines depending on circumstances.
                </span>
              </div>
              <div className="content-pillar-wrapper">
                <h3 className="overview-heading">Fifth Pillar: Hajj (Pilgrimage)</h3>
                <span className="overview-text">
                  The final Pillar of Islam, Hajj, mandates a pilgrimage to Mecca during the 12th lunar month. Pilgrims wear simple white sheets, removing any distinctions of class or status among them. Men dress uniformly in simple fabric, while women wear simpler versions of their regular attire, signifying unity and purity during the pilgrimage.
                  Upon entering Mecca's sanctuary, pilgrims enter a state of "ihram" or purity. The rituals involve circumambulating the Kaaba (Tawaf), touching the Black Stone (Istilam), traveling between Mount Safa and Mount Marwah (Sa'yee), and symbolically stoning the Devil in Mina (Ramee). Pilgrims visit the Kaaba in the mosque, circle it, pray collectively, and perform the "standing ceremony" at Arafat to recall Muhammad's Farewell Sermon.
                  During the return journey, pilgrims stop in Mina to stone pillars symbolizing Satan before returning to Mecca for final circumambulation of the Kaaba. Inability due to physical or economic reasons excuses the duty of Hajj, as the Quran specifies that only capable individuals are obligated. Hajj follows the path of Prophet Muhammad, seeking spiritual enlightenment.
                  The pilgrim, or haji, holds honor in the Muslim community, with emphasis placed on devotion to God rather than seeking social status. The Hajj serves as an opportunity for self-reflection and improvement. An Umrah, a pilgrimage outside the Hajj season, is not obligatory but strongly recommended in Islam.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>
    </>
  );
});