import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const NewsRtl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_news">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>أخبار</span>
                <h3>أحدث الأخبار</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <ul>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModalOne}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/1.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">أليكس واتسون</a>
                      <span>05 أبريل 2021</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalOne}>
                    يُطلق أداة جديدة تتيح استضافة الفيديو المباشرمع هذه
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalOne}>
                      <span>اقرأ أكثر</span>
                    </a>
                  </div>
                  {/* END اقرأ أكثر BUTTON */}
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModalOne}
                  contentLabel="My dialog"
                  className="mymodal .text-rtl"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news rtl-p">
                    <button className="close-modal" onClick={toggleModalOne}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/1.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              بواسطة <a href="#">أليكس واتسون</a>
                              <span>05 أبريل 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            يُطلق أداة جديدة تتيح استضافة الفيديو المباشر
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              فقط لأننا لا نستطيع الخروج و مثلنا عادة ، لا يعني
                              أنه يتعين علينا التوقف عن تناوله الصور. لا يزال
                              هناك الكثير مما يمكنك القيام به ، بشرط أنت على
                              استعداد لاستخدام بعض الخيال. هنا بعض الأفكار التي
                              تجعلك تستمر في التصوير حتى حياتك الطبيعية يستأنف.
                            </p>
                            <p>
                              يحب معظم المصورين تصوير ما هو غير عادي و أنت لا
                              تحصل على شيء غير عادي أكثر من هؤلاء مرات غير
                              مسبوقة. الآن كل شيء يعتبر استثنائي. هناك عدد من
                              أشياء رائعة حول أيام الإغلاق هذه تستحق التصوير
                              الآن حتى نتمكن من تذكرها متى انتهى كل شيء.
                            </p>
                            <p>
                              الشوارع الفارغة التي عادة ما تكون مزدحمة رائعة
                              ويمكن أن تستحضر معنى الصور التاريخية من قبل اختراع
                              السيارة. اشياء اخرى التي تختلف في الوقت الحالي
                              ستكون في طوابير الدخول إلى المتاجر ووضع علامة على
                              الخطوط في الأرضية لإظهار مدى تباعدنا.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="tumb"
                                />
                              </div>
                              <p>
                                يجد معظم المصورين صعوبة في رؤية الأشياء الممتعة
                                الصور في الأماكن التي يتواجدون فيها أكثر من
                                غيرها معروف. رحلة إلى مكان جديد تبدو دائمًا
                                بالضبط ما يحتاجه التصوير الفوتوغرافي لدينا ، مثل
                                التصوير بعيدًا عن المنزل يلهمنا باستمرار إلى
                                الجديد ارتفاعات فنية.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              تخيل أن كل شيء جديد وأنك لم تره من قبل ، وبعد ذلك
                              ستكون حرًا في ملاحظة ملف الخطوط الرائدة ، الأماكن
                              التي تلتقي فيها إحدى الحواف آخر في تناغم هندسي
                              مبهج ، وكيف عندما تتحول الأشياء العادية في المطبخ
                              الضوء مضاء أو مطفأ.
                            </p>
                            <p>
                              الحيلة هنا هي أن تنظر ببطء ، ثم تنظر تكرارا. خذ
                              الوقت الكافي للنظر في التفاصيل والبحث في نفس الشيء
                              من زوايا مختلفة ، مع ضوء مختلف وعدسات طويلة وعدسات
                              واسعة. ثم تحرك إلى اليسار قليلا. قد لا تشعر أبدًا
                              بالحاجة لمغادرة المنزل مرة أخرى.
                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <span>يشارك:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                      </div>
                    </div>
                    {/* END BOX INNER */}
                  </div>
                  {/* END MODALBOX NEWS */}
                </Modal>
                {/* END MODAL */}
              </div>
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalTwo}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/2.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      بواسطة <a href="#">بروك كينيدي</a>
                      <span>22 مارس 2021</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalTwo}>
                    أعلنت شركة عن كاميرتين جديدتين كاملتي الإطار بدون أي ضجة
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalTwo}>
                      <span>اقرأ أكثر</span>
                    </a>
                  </div>
                  {/* END اقرأ أكثر BUTTON */}
                </div>

                <Modal
                  isOpen={isOpen2}
                  onRequestClose={toggleModalTwo}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news rtl-p">
                    <button className="close-modal" onClick={toggleModalTwo}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE MODAL */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/2.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              بواسطة <a href="#">بروك كينيدي</a>
                              <span>22 مارس 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            أعلنت شركة عن كاميرتين جديدتين كاملتي الإطار بدون أي
                            ضجة
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              فقط لأننا لا نستطيع الخروج و مثلنا عادة ، لا يعني
                              أنه يتعين علينا التوقف عن تناوله الصور. لا يزال
                              هناك الكثير مما يمكنك القيام به ، بشرط أنت على
                              استعداد لاستخدام بعض الخيال. هنا بعض الأفكار التي
                              تجعلك تستمر في التصوير حتى حياتك الطبيعية يستأنف.
                            </p>
                            <p>
                              يحب معظم المصورين تصوير ما هو غير عادي و أنت لا
                              تحصل على شيء غير عادي أكثر من هؤلاء مرات غير
                              مسبوقة. الآن كل شيء يعتبر استثنائي. هناك عدد من
                              أشياء رائعة حول أيام الإغلاق هذه تستحق التصوير
                              الآن حتى نتمكن من تذكرها متى انتهى كل شيء.
                            </p>
                            <p>
                              الشوارع الفارغة التي عادة ما تكون مزدحمة رائعة
                              ويمكن أن تستحضر معنى الصور التاريخية من قبل اختراع
                              السيارة. اشياء اخرى التي تختلف في الوقت الحالي
                              ستكون في طوابير الدخول إلى المتاجر ووضع علامة على
                              الخطوط في الأرضية لإظهار مدى تباعدنا.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quote"
                                />
                              </div>
                              <p>
                                يجد معظم المصورين صعوبة في رؤية الأشياء الممتعة
                                الصور في الأماكن التي يتواجدون فيها أكثر من
                                غيرها معروف. رحلة إلى مكان جديد تبدو دائمًا
                                بالضبط ما يحتاجه التصوير الفوتوغرافي لدينا ، مثل
                                التصوير بعيدًا عن المنزل يلهمنا باستمرار إلى
                                الجديد ارتفاعات فنية.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              تخيل أن كل شيء جديد وأنك لم تره من قبل ، وبعد ذلك
                              ستكون حرًا في ملاحظة ملف الخطوط الرائدة ، الأماكن
                              التي تلتقي فيها إحدى الحواف آخر في تناغم هندسي
                              مبهج ، وكيف عندما تتحول الأشياء العادية في المطبخ
                              الضوء مضاء أو مطفأ.
                            </p>
                            <p>
                              الحيلة هنا هي أن تنظر ببطء ، ثم تنظر تكرارا. خذ
                              الوقت الكافي للنظر في التفاصيل والبحث في نفس الشيء
                              من زوايا مختلفة ، مع ضوء مختلف وعدسات طويلة وعدسات
                              واسعة. ثم تحرك إلى اليسار قليلا. قد لا تشعر أبدًا
                              بالحاجة لمغادرة المنزل مرة أخرى.
                            </p>
                          </div>
                          <div className="news_share">
                            <span>يشارك:</span>
                            <Social />
                            {/* END SOCIAL */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalThree}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/3.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      بواسطة<a href="#">باولا أتكينز</a>
                      <span>15 فبراير 2021</span>
                    </p>
                  </div>

                  <h3 className="title" onClick={toggleModalThree}>
                    لماذا يجب على كل مصور تصوير فيلم حتى في عام يجب على
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalThree}>
                      <span>اقرأ أكثر</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen3}
                  onRequestClose={toggleModalThree}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news rtl-p">
                    <button className="close-modal" onClick={toggleModalThree}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/3.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#">Paola Atkins</a>
                              <span>15 Feb 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            لماذا يجب على كل مصور تصوير فيلم حتى في عام يجب على
                          </h3>
                        </div>
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              فقط لأننا لا نستطيع الخروج و مثلنا عادة ، لا يعني
                              أنه يتعين علينا التوقف عن تناوله الصور. لا يزال
                              هناك الكثير مما يمكنك القيام به ، بشرط أنت على
                              استعداد لاستخدام بعض الخيال. هنا بعض الأفكار التي
                              تجعلك تستمر في التصوير حتى حياتك الطبيعية يستأنف.
                            </p>
                            <p>
                              يحب معظم المصورين تصوير ما هو غير عادي و أنت لا
                              تحصل على شيء غير عادي أكثر من هؤلاء مرات غير
                              مسبوقة. الآن كل شيء يعتبر استثنائي. هناك عدد من
                              أشياء رائعة حول أيام الإغلاق هذه تستحق التصوير
                              الآن حتى نتمكن من تذكرها متى انتهى كل شيء.
                            </p>
                            <p>
                              الشوارع الفارغة التي عادة ما تكون مزدحمة رائعة
                              ويمكن أن تستحضر معنى الصور التاريخية من قبل اختراع
                              السيارة. اشياء اخرى التي تختلف في الوقت الحالي
                              ستكون في طوابير الدخول إلى المتاجر ووضع علامة على
                              الخطوط في الأرضية لإظهار مدى تباعدنا.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quote"
                                />
                              </div>
                              <p>
                                يجد معظم المصورين صعوبة في رؤية الأشياء الممتعة
                                الصور في الأماكن التي يتواجدون فيها أكثر من
                                غيرها معروف. رحلة إلى مكان جديد تبدو دائمًا
                                بالضبط ما يحتاجه التصوير الفوتوغرافي لدينا ، مثل
                                التصوير بعيدًا عن المنزل يلهمنا باستمرار إلى
                                الجديد ارتفاعات فنية.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              تخيل أن كل شيء جديد وأنك لم تره من قبل ، وبعد ذلك
                              ستكون حرًا في ملاحظة ملف الخطوط الرائدة ، الأماكن
                              التي تلتقي فيها إحدى الحواف آخر في تناغم هندسي
                              مبهج ، وكيف عندما تتحول الأشياء العادية في المطبخ
                              الضوء مضاء أو مطفأ.
                            </p>
                            <p>
                              الحيلة هنا هي أن تنظر ببطء ، ثم تنظر تكرارا. خذ
                              الوقت الكافي للنظر في التفاصيل والبحث في نفس الشيء
                              من زوايا مختلفة ، مع ضوء مختلف وعدسات طويلة وعدسات
                              واسعة. ثم تحرك إلى اليسار قليلا. قد لا تشعر أبدًا
                              بالحاجة لمغادرة المنزل مرة أخرى.
                            </p>
                          </div>
                          <div className="news_share">
                            <span>يشارك:</span>
                            <Social />
                            {/* END SOCIAL */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalFour}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/4.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      بواسطة <a href="#toggleButton">كيفن ستون</a>
                      <span>22 يناير 2021</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalFour}>
                    مع هذه كن مبدعًا في القفل مع هذه الصورة الممتعة المشاريع
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalFour}>
                      <span>اقرأ أكثر</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}
                <Modal
                  isOpen={isOpen4}
                  onRequestClose={toggleModalFour}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news rtl-p">
                    <button className="close-modal" onClick={toggleModalFour}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/4.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}

                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              بواسطة <a href="#toggleButton">كيفن ستون</a>
                              <span>22 يناير 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            كن مبدعًا في القفل مع هذه الصورة الممتعة المشاريع
                          </h3>
                        </div>
                        {/* END DETAILS */}

                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              فقط لأننا لا نستطيع الخروج و مثلنا عادة ، لا يعني
                              أنه يتعين علينا التوقف عن تناوله الصور. لا يزال
                              هناك الكثير مما يمكنك القيام به ، بشرط أنت على
                              استعداد لاستخدام بعض الخيال. هنا بعض الأفكار التي
                              تجعلك تستمر في التصوير حتى حياتك الطبيعية يستأنف.
                            </p>
                            <p>
                              يحب معظم المصورين تصوير ما هو غير عادي و أنت لا
                              تحصل على شيء غير عادي أكثر من هؤلاء مرات غير
                              مسبوقة. الآن كل شيء يعتبر استثنائي. هناك عدد من
                              أشياء رائعة حول أيام الإغلاق هذه تستحق التصوير
                              الآن حتى نتمكن من تذكرها متى انتهى كل شيء.
                            </p>
                            <p>
                              الشوارع الفارغة التي عادة ما تكون مزدحمة رائعة
                              ويمكن أن تستحضر معنى الصور التاريخية من قبل اختراع
                              السيارة. اشياء اخرى التي تختلف في الوقت الحالي
                              ستكون في طوابير الدخول إلى المتاجر ووضع علامة على
                              الخطوط في الأرضية لإظهار مدى تباعدنا.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quote"
                                />
                              </div>
                              <p>
                                يجد معظم المصورين صعوبة في رؤية الأشياء الممتعة
                                الصور في الأماكن التي يتواجدون فيها أكثر من
                                غيرها معروف. رحلة إلى مكان جديد تبدو دائمًا
                                بالضبط ما يحتاجه التصوير الفوتوغرافي لدينا ، مثل
                                التصوير بعيدًا عن المنزل يلهمنا باستمرار إلى
                                الجديد ارتفاعات فنية.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              تخيل أن كل شيء جديد وأنك لم تره من قبل ، وبعد ذلك
                              ستكون حرًا في ملاحظة ملف الخطوط الرائدة ، الأماكن
                              التي تلتقي فيها إحدى الحواف آخر في تناغم هندسي
                              مبهج ، وكيف عندما تتحول الأشياء العادية في المطبخ
                              الضوء مضاء أو مطفأ.
                            </p>
                            <p>
                              الحيلة هنا هي أن تنظر ببطء ، ثم تنظر تكرارا. خذ
                              الوقت الكافي للنظر في التفاصيل والبحث في نفس الشيء
                              من زوايا مختلفة ، مع ضوء مختلف وعدسات طويلة وعدسات
                              واسعة. ثم تحرك إلى اليسار قليلا. قد لا تشعر أبدًا
                              بالحاجة لمغادرة المنزل مرة أخرى.
                            </p>
                          </div>
                          <div className="news_share">
                            <span>يشارك:</span>
                            <Social />
                            {/* END SOCIAL */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
              </div>
              {/* END LIST INNER */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewsRtl;
