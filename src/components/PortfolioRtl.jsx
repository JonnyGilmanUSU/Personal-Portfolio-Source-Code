import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const PortfolioRtl = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <Gallery>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>ملف</span>
                <h3>محفظة إبداعية</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>الكل</Tab>
                {/* <Tab>فيميو</Tab> */}
                <Tab>موقع يوتيوب</Tab>
                <Tab>التصوير</Tab>
                <Tab>تفاصيل</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    {/* <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/5.jpg"
                            alt="Vimeo"
                            onClick={() => setOpen2(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Teresa Butler</h3>
                          <span>Vimeo</span>
                        </div>
                      </div>
                    </li> */}
                    {/* END VIMEO */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/2.jpg"
                            alt="Youtube"
                            onClick={() => setOpen(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ashely Flores</h3>
                          <span>Youtube</span>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <Item
                            original="assets/img/portfolio/4.jpg"
                            thumbnail="assets/img/portfolio/4.jpg"
                            width={500}
                            height={550}
                          >
                            {({ ref, open }) => (
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Childhood"
                                data-tip
                                data-for="shot"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            )}
                          </Item>
                        </div>
                        <div className="mobile_title">
                          <h3>Derek Smith</h3>
                          <span>Photo shoot</span>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <Item
                            original="assets/img/portfolio/3.jpg"
                            thumbnail="assets/img/portfolio/3.jpg"
                            width={500}
                            height={550}
                          >
                            {({ ref, open }) => (
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Childhood"
                                data-tip
                                data-for="shot"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            )}
                          </Item>
                        </div>
                        <div className="mobile_title">
                          <h3>Gloria Genkins</h3>
                          <span>Photo shoot</span>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/6.jpg"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Selena Gomez</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ave Simone</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL All */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/5.jpg"
                            alt="Vimeo"
                            onClick={() => setOpen2(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Teresa Butler</h3>
                          <span>Vimeo</span>
                        </div>
                      </div>
                    </li>
                    {/* END VIMEO */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END VIMEO VIDEO */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/2.jpg"
                            alt="Youtube"
                            onClick={() => setOpen(true)}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ashely Flores</h3>
                          <span>Youtube</span>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END YOUTUBE VIDEO */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <Item
                            original="assets/img/portfolio/4.jpg"
                            thumbnail="assets/img/portfolio/4.jpg"
                            width={500}
                            height={550}
                          >
                            {({ ref, open }) => (
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Childhood"
                                data-tip
                                data-for="shot"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            )}
                          </Item>
                        </div>
                        <div className="mobile_title">
                          <h3>Derek Smith</h3>
                          <span>Photo shoot</span>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <Item
                            original="assets/img/portfolio/3.jpg"
                            thumbnail="assets/img/portfolio/3.jpg"
                            width={500}
                            height={550}
                          >
                            {({ ref, open }) => (
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Childhood"
                                data-tip
                                data-for="shot"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            )}
                          </Item>
                        </div>
                        <div className="mobile_title">
                          <h3>Gloria Genkins</h3>
                          <span>Photo shoot</span>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END PHOTOGRAHY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/6.jpg"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Selena Gomez</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ave Simone</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END Details Gallery */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </Gallery>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      />
      {/* End Vimeo Modal Video */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>سيلينا غوميز</h3>
                <span>تفاصيل</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    نحن نعيش في عالم نحتاج فيه إلى التحرك بسرعة وتكرار على
                    أفكارنا بأكبر قدر ممكن من المرونة. نماذج بالأحجام الطبيعية
                    للبناء يحقق التوازن المثالي بين تمثيل الحياة الحقيقية للمنتج
                    النهائي وسهولة التعديل.
                  </p>
                  <p>
                    النماذج بالأحجام الطبيعية مفيدة لكل من المرحلة الإبداعية من
                    مشروع - على سبيل المثال عندما تحاول اكتشاف ملف تدفقات
                    المستخدم أو التسلسل الهرمي المرئي المناسب - و مرحلة الإنتاج
                    عندما يمثلون الهدف المنتج. جعل النماذج بالأحجام الطبيعية
                    جزءًا من إبداعك و تتيح لك عملية التطوير التفكير بسرعة
                    وسهولة.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">عميل</span>
                      <span>ألفارو موراتا</span>
                    </li>
                    <li>
                      <span className="first">فئة</span>
                      <span>تفاصيل</span>
                    </li>
                    <li>
                      <span className="first">تاريخ</span>
                      <span>07 مارس 2021</span>
                    </li>
                    <li>
                      <span className="first">يشارك</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal  "
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable rtl-p">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>افي سيمون</h3>
                <span>تفاصيل</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    نحن نعيش في عالم نحتاج فيه إلى التحرك بسرعة وتكرار على
                    أفكارنا بأكبر قدر ممكن من المرونة. نماذج بالأحجام الطبيعية
                    للبناء يحقق التوازن المثالي بين تمثيل الحياة الحقيقية للمنتج
                    النهائي وسهولة التعديل.
                  </p>
                  <p>
                    النماذج بالأحجام الطبيعية مفيدة لكل من المرحلة الإبداعية من
                    مشروع - على سبيل المثال عندما تحاول اكتشاف ملف تدفقات
                    المستخدم أو التسلسل الهرمي المرئي المناسب - و مرحلة الإنتاج
                    عندما يمثلون الهدف المنتج. جعل النماذج بالأحجام الطبيعية
                    جزءًا من إبداعك و تتيح لك عملية التطوير التفكير بسرعة
                    وسهولة.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">عميل</span>
                      <span>ألفارو موراتا</span>
                    </li>
                    <li>
                      <span className="first">فئة</span>
                      <span>تفاصيل</span>
                    </li>
                    <li>
                      <span className="first">تاريخ</span>
                      <span>07 مارس 2021</span>
                    </li>
                    <li>
                      <span className="first">يشارك</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default PortfolioRtl;
