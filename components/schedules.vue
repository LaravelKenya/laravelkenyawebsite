<script lang="ts" setup></script>



<template>
  <!-- This section is intended to be in the schedules page upto ( check end of this comment) -->
  <!-- Add this CDN link for icons to work (<link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
)-->
  <section id="gallery" class="section-padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Event Schedules</h2>
            <p class="wow fadeInDown" data-wow-delay="0.2s">This is a list of events organized by Laravel Kenya alongside
              some partners</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-6 col-lg-3">
          <div class="gallery-box">
            <div class="img-thumb">
              <img class="img-fluid" src="assets/img/gallery/img-1.jpg" alt="">
            </div>
            <div class="overlay-box text-center">
              <a class="lightbox" href="google.com">
                <i class="lni-plus"></i>



              </a>
            </div>
          </div>
        </div>

      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-xs-12">
          <a href="#" class="btn btn-common">Browse All</a>
        </div>
      </div>
    </div>
  </section>

  <!-- This is intended to be the end of the schedules page -->

  <!-- This content from here is intended for the details of an event when a user clicks a single event from above page upto ( check end of this comment )-->
  <!-- This changes does not reflect the intended layout of the website and therefore changes in routing, backend is also required before deployment -->
  <header>
    <div id="hero-area" class="hero-area-bg">
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-sm-12">
            <div class="contents text-center">
              <div class="icon">
                <i class="lni-mic"></i>
              </div>
              <p class="banner-info">15, Oct 2020 - Maria Hall, NY, United states</p>
              <h2 class="head-title">Developers Conference</h2>
              <p class="banner-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis nesciunt atque perferendis, ipsa
                doloremque deserunt cum qui.</p>
              <div class="banner-btn">
                <a href="#" class="btn btn-common">Get Ticket</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="count">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="count-wrapper text-center">
            <div class="time-countdown wow fadeInUp" data-wow-delay="0.2s">
              <div id="clock" class="time-count"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-xs-12">
          <div class="img-thumb">
            <img class="img-fluid" src="assets/img/about/img1.png" alt="">
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-xs-12">
          <div class="about-content">
            <div>
              <div class="about-text">
                <h2>About The Conference</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ncididunt ametfh consectetur
                  dolore magna aliqua. Ut enim ad minim veniam dolor sitame magnaelit ate consectetur adipisicing. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod.</p>
              </div>
              <ul class="stylish-list mb-3">
                <li><i class="lni-check-mark-circle"></i>We are providing different services</li>
                <li><i class="lni-check-mark-circle"></i>We are one of leading company</li>
                <li><i class="lni-check-mark-circle"></i>Profitability is the primary goal of all business</li>
                <li><i class="lni-check-mark-circle"></i>Learn how to grow your Business </li>
                <li><i class="lni-check-mark-circle"></i>Professional solutions for your business</li>
              </ul>
              <a class="btn btn-common" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="ready-to-play">
    <video id="bgvid" class="stop" loop>
      <source src="assets/video/event.webm" type="video/mp4">
    </video>
    <div id="polina" class="video-text">
      <div class="tb-t">
        <div class="tb-c">
          <div class="polina"><button><i class='lni-play'></i></button></div>
        </div>
      </div>
    </div>
  </div>

  <section id="information-bar">
    <div class="container">
      <div class="row inforation-wrapper">
        <div class="col-lg-3 col-md-6 col-xs-12">
          <ul>
            <li>
              <i class="lni-map-marker"></i>
            </li>
            <li><span><b>Location</b> Maria Hall, NY, USA</span></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <ul>
            <li>
              <i class="lni-calendar"></i>
            </li>
            <li><span><b>Date & Time</b> 10am - 7pm, 15th Oct</span></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <ul>
            <li>
              <i class="lni-mic"></i>
            </li>
            <li><span><b>Speakers</b> 25 Professionals</span></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <ul>
            <li>
              <i class="lni-user"></i>
            </li>
            <li><span><b>Seats</b> 100 People</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="team" class="section-padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Our Speakers</h2>
            <p class="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
              vocent mediocritatem an <br> cule dicta iriure at phaedrum.</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-bt">
        <div class="col-lg-3 col-md-6 col-xs-12">

          <div class="team-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="team-img">
              <img class="img-fluid" src="assets/img/team/team-01.jpg" alt="">
              <div class="team-overlay">
                <div class="overlay-social-icon text-center">
                  <ul class="social-icons">
                    <li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-google" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-pinterest" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="info-text">
              <h3><a href="#">JONATHON DOE</a></h3>
              <p>Product Designer, Tesla</p>
            </div>
          </div>

        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">

          <div class="team-item wow fadeInUp" data-wow-delay="0.4s">
            <div class="team-img">
              <img class="img-fluid" src="assets/img/team/team-02.jpg" alt="">
              <div class="team-overlay">
                <div class="overlay-social-icon text-center">
                  <ul class="social-icons">
                    <li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-google" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-pinterest" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="info-text">
              <h3><a href="#">Patric Green</a></h3>
              <p>Front-end Developer</p>
            </div>
          </div>

        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">

          <div class="team-item wow fadeInUp" data-wow-delay="0.6s">
            <div class="team-img">
              <img class="img-fluid" src="assets/img/team/team-03.jpg" alt="">
              <div class="team-overlay">
                <div class="overlay-social-icon text-center">
                  <ul class="social-icons">
                    <li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-google" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-pinterest" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="info-text">
              <h3><a href="#">Paul Kowalsy</a></h3>
              <p>Lead Designer, TNW</p>
            </div>
          </div>

        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">

          <div class="team-item wow fadeInUp" data-wow-delay="0.8s">
            <div class="team-img">
              <img class="img-fluid" src="assets/img/team/team-04.jpg" alt="">
              <div class="team-overlay">
                <div class="overlay-social-icon text-center">
                  <ul class="social-icons">
                    <li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-google" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-pinterest" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="info-text">
              <h3><a href="#">Jhon Doe</a></h3>
              <p>Back-end Developer, ASUS</p>
            </div>
          </div>

        </div>

      </div>
      <a href="speakers.html" class="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">Meet with all speakers</a>
    </div>
  </section>

  <!-- This is the end of the event  detail page-->
</template>

<style scoped></style>
