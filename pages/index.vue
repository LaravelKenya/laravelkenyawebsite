<script lang="ts" setup>
useHead({
  title: "Home"
  
})
useSeoMeta({
  title: 'Laravel Kenya',
  description: 'Laravel Kenya Community',
  ogTitle: 'Laravel Kenya',
  ogDescription: 'Laravel Kenya Community',
  twitterTitle: 'Laravel Kenya Community',
  twitterDescription: 'Welcome to Laravel Kenya Community. We are glad to have you',
})
</script>

<template>
  <div>
    <section id="about" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="img-thumb">
              <img alt="" class="img-fluid" src="/assets/img/about/img1.png">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="about-content">
              <div>
                <div class="about-text">
                  <h2>About Laravel Kenya </h2>
                  <p>
                    Welcome to Laravel Kenya Community.We're a dynamic group of developers, designers, and tech
                    enthusiasts who share a passion for building.
                    Our community is committed to promoting the use of PHP, Laravel and other cutting-edge
                    technologies in
                    Kenya, through regular meetups, workshops, hackathons, and other events. Whether you're an
                    experienced developer or just starting out, you'll find valuable insights, expert guidance, and a
                    supportive community of like-minded individuals. Join us today and take your PHP and Laravel
                    skills to the next level!
                  </p>
                </div>
                <a class="btn btn-common" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="intro" class="intro section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Why Join Us</h2>
              <p>By Joining us you will be able to get great advantages through our community and explore other
                Technologies </p>
            </div>
          </div>
        </div>
        <div class="row intro-wrapper">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-microphone"></i>
              <h3>Great Speakers</h3>
              <p>
                We have Great Speakers in our community.
              </p>
              <span class="count-number">01</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text">
              <i class="lni-users"></i>
              <h3 class="ts-title">New People</h3>
              <p>
                You will be able to network and meet new people in our community hence brightening your future
              </p>
              <span class="count-number">02</span>
            </div>
            <div class="border-shap left"></div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-bullhorn"></i>
              <h3>Local Events</h3>
              <p>
                We meet once in a time to have great local events and also learn new things
              </p>
              <span class="count-number">03</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-heart"></i>
              <h3>Get Inspired</h3>
              <p>
                Get inspired and learn new things in our community and grow yourself in technology
              </p>
              <span class="count-number">04</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-cup"></i>
              <h3>Networking Session</h3>
              <p>
                Network with new people and learn new things from them
              </p>
              <span class="count-number">05</span>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section class="counter-section section-padding">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-mic"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">43</div>
                <p>Speakers</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-bulb"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">800</div>
                <p>Participants</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-briefcase"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">24</div>
                <p>Sponsors</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-coffee-cup"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">34</div>
                <p>Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<style scoped></style>
