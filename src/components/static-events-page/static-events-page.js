import React from 'react';
/* CSS file */
import './../../assets/static-events-page/application-2eda1bb681951a666106256a94db76f55cf45ca5b306f8306375c7a5932b7b1c.css'
/* import './../../assets/static-events-page/4946bd2e-8cbd-461c-8121-ca6696f6267d.css';*/






/* Assets */
/* Images for Events */
import image1 from './../../assets/static-events-page/e42tu-SaQNnXiW-w8BrFtXDsfMj-xfFFIA97HjVu1k8.jpg';
import image2 from './../../assets/static-events-page/7zWKVzGUXRWSN_61PiUx3uMf__5z2MCAds7X5xVwfX0.png';
import image3 from './../../assets/static-events-page/9zOHXi5-WEMWlxOeq2Gt65URStlAQOr8CMCyMGiDHbk.jpg';
import image4 from './../../assets/static-events-page/z76YzLG716inunOuBQYwlFEB5t-h60Z2LcQjpRY5Fg4.jpg';
import image5 from './../../assets/static-events-page/z7BJhiShf4Kv9CzuolY3fMaYpEPXrNno6RlDPOv-YQ8.jpg';
import image6 from './../../assets/static-events-page/gwcHxHEtjx-fdJGigonjZif-Z7jOW9QoGXSEfwKuGww.jpg';

/* Arrow svg for more events button */
import arrow from './../../assets/static-events-page/link-arrow-537d64d5ed567805811f5f6e81706330da41f3ec945ad082538a767d7b78886e.svg';

/* Main page starts here */
const StaticEventsPage=()=>{
    return(
    <div>
     <div className="chakra-ui-light">  {/* body tag */}
    <div className="body-wrap">
      <div className="event-takeover js-event-takeover"></div>
      <div className="content-container">
        <section className="content-container--content">
          <section
            className="
              row
              tout-list-container
              tout-list-container--events
              tout-list-container--future-events
            "
          >
            <div className="columns">
              <h1 className="sub-title">Future events</h1>
              <div
                className="
                  tout-list
                  tout-list--events
                  tout-list--grid
                  tout-list--grid
                  tout-list--grid-x2
                  tout-list--future-events
                "
              >
                <div className="tout-list--grid__container">
                  <article className="tout tout--default tout--event">
                    <a
                      className="tout__link"
                      href="#"
                      ><figure className="placeholder small">
                        <div className="placeholder-inner">
                          <img
                            loading="lazy"
                            className="js-lazyload loaded"
                            src={image1} alt="Image1"
                          />
                        </div>
                      </figure>
                      <div className="tout__details">
                        <h3 className="tout__title">
                          Building Strategic Intelligence Series
                        </h3>
                        <p className="tout__description">
                          These interactive virtual sessions make experts and
                          innovators associated with the World Economic Forum’s
                          Strategic Intelligence platform available to share
                          their insights on some of the ...
                        </p>
                        <div className="tout__meta">
                          <div className="caption">
                            <span>10 Aug—31 December 2021</span>
                            <span>Strategic Intelligence Virtual Event</span>
                          </div>
                        </div>
                      </div></a
                    >
                  </article>
                  <article className="tout tout--default tout--event">
                    <a
                      className="tout__link"
                      href="#"
                      ><figure className="placeholder small">
                        <div className="placeholder-inner">
                          <picture
                            ><img loading="lazy"
                              className="js-lazyload loaded"
                              src={image2}
                              alt="image2"
                          /></picture>
                        </div>
                      </figure>
                      <div className="tout__details">
                        <h3 className="tout__title">
                          Sustainable Development Impact Summit
                        </h3>
                        <p className="tout__description"></p>
                        <div className="tout__meta">
                          <div className="caption">
                            <span>20—23 September 2021</span>
                            <span>Geneva, Switzerland</span>
                          </div>
                        </div>
                      </div></a>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section
            className="
              row
              tout-list-container
              tout-list-container--events
              tout-list-container--past-events
            "
          >
            <div className="columns">
              <h1 className="sub-title">Past events</h1>
              <div
                className="
                  tout-list
                  tout-list--events
                  tout-list--grid
                  tout-list--grid
                  tout-list--grid-x2
                  tout-list--past-events
                "
              >
                <div className="tout-list--grid__container">
                  <article className="tout tout--default tout--event">
                    <a
                      className="tout__link"
                      href="#"
                      ><figure className="placeholder small">
                        <div className="placeholder-inner">
                          <img loading="lazy"
                          className="js-lazyload loaded"
                            src={image3}
                            alt="image3"
                          />
                        </div>
                      </figure>
                      <div className="tout__details">
                        <h3 className="tout__title">The Jobs Reset Summit</h3>
                        <p className="tout__description">
                          In 2020, the global workforce lost an equivalent of
                          255 million full-time jobs, an estimated $3.7 trillion
                          in wages and 4.4% of global GDP, a staggering toll on
                          lives and livelihoods. Whi...
                        </p>
                        <div className="tout__meta">
                          <div className="caption">
                            <span>1—2 June 2021</span>
                            <span>Geneva, Switzerland</span>
                          </div>
                        </div>
                      </div></a
                    >
                  </article>
                  <article className="tout tout--default tout--event">
                    <a
                      className="tout__link"
                      href="#"
                      ><figure className="placeholder small">
                        <div className="placeholder-inner">
                          <picture
                            ><img
                              loading="lazy"
                              className="js-lazyload loaded"
                              src={image4}
                              alt="image4"
                          /></picture>
                        </div>
                      </figure>
                      <div className="tout__details">
                        <h3 className="tout__title">
                          Climate Breakthroughs: The Road to COP26 and Beyond
                        </h3>
                        <p className="tout__description">
                          The Climate Breakthroughs online event will explore
                          what truly transformational change looks like within
                          specific sectors of the global economy, the role of
                          radical collaboration in deliv...
                        </p>
                        <div className="tout__meta">
                          <div className="caption">
                            <span>27 May 2021</span>
                            <span>Geneva, Switzerland</span>
                          </div>
                        </div>
                      </div></a
                    >
                  </article>
                  <article className="tout tout--default tout--event">
                    <a
                      className="tout__link"
                      href="#"
                      ><figure className="placeholder small">
                        <div className="placeholder-inner">
                          <picture>
                            <img
                              loading="lazy"
                              className="js-lazyload loaded"
                              src={image5}
                              alt="image5"
                          /></picture>
                        </div>
                      </figure>
                      <div className="tout__details">
                        <h3 className="tout__title">Virtual Ocean Dialogues</h3>
                        <p className="tout__description">
                          This second edition of the Virtual Ocean Dialogues,
                          25-26 May 2021, will foster inclusive, constructive
                          and practical dialogue on the global ocean action
                          agenda. The online event provides...
                        </p>
                        <div className="tout__meta">
                          <div className="caption">
                            <span>25—26 May 2021</span>
                            <span>Geneva, Switzerland</span>
                          </div>
                        </div>
                      </div></a
                    >
                  </article>
                  <article className="tout tout--default tout--event">
                    <a
                      className="tout__link"
                      href="#"
                      ><figure className="placeholder small">
                        <div className="placeholder-inner">
                          <picture>
                            <img
                              loading="lazy"
                              className="js-lazyload loaded"
                              src={image6}
                              alt="image6"
                          /></picture>
                        </div>
                      </figure>
                      <div className="tout__details">
                        <h3 className="tout__title">
                          Global Technology Governance Summit
                        </h3>
                        <p className="tout__description">
                          Our ability to harness and disseminate the new
                          technologies of the Fourth Industrial Revolution (4IR)
                          will play a key role in ensuring our recovery from the
                          pandemic and the avoidance of ...
                        </p>
                        <div className="tout__meta">
                          <div className="caption">
                            <span>6—8 April 2021</span>
                            <span>Virtual Meeting Hosted by Japan</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <div className="row">
            <div className="columns">
              <a href="#">
                <div className="past-events-button">
                  More past events
                  <img
                    className="link-nub__right-icon"
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>  {/* body tag */}


            </div>
    )
}
export default StaticEventsPage;
