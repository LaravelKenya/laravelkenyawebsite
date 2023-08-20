<script lang="ts" setup></script>

<template>

  <section id="contact-map" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Contact Us</h2>
            <p class="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius
              illum vocent mediocritatem an <br> cule dicta iriure at phaedrum.</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 col-xs-12">
          <div class="container-form wow fadeInLeft" data-wow-delay="0.2s">
            <div class="form-wrapper">
              <form id="contactForm" data-toggle="validator" method="post" name="contact-form" role="form">
                <div class="row">
                  <div class="col-md-6 form-line">
                    <div class="form-group">
                      <input id="name" class="form-control" data-error="Please enter your name" name="email"
                             placeholder="First Name" required
                             type="text">
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-6 form-line">
                    <div class="form-group">
                      <input id="email" class="form-control" data-error="Please enter your Email" name="email"
                             placeholder="Email" required
                             type="email">
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12 form-line">
                    <div class="form-group">
                      <input id="msg_subject" class="form-control" data-error="Please enter your message subject"
                             name="subject" placeholder="Subject"
                             required type="tel">
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                        <textarea id="message" class="form-control" data-error="Write your message" name="message"
                                  required
                                  rows="4"></textarea>
                    </div>
                    <div class="form-submit">
                      <button id="form-submit" class="btn btn-common" type="submit"><i aria-hidden="true"
                                                                                       class="fa fa-paper-plane"></i>
                        Send
                        Message
                      </button>
                      <div id="msgSubmit" class="h3 text-center hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
