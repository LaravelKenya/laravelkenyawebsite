<script lang="ts" setup>
import {Contacts} from "~/types/types";

const contact = ref<Contacts>({
  name: "",
  message: "",
  email: "",
  subject: ""
})
const loading = ref<boolean>(false)
const submit = async () => {
  loading.value = true
  const {data, pending, error, refresh} = await useFetch('/api/contacts', {
    method: 'POST',
    body: contact.value
  })
  loading.value = pending.value
  if (data) {
    contact.value = {name: "", message: "", email: "", subject: ""}
  }

}

</script>

<template>
  <section id="contact-map" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Contact Us</h2>
            <p class="wow fadeInDown" data-wow-delay="0.2s">Get in touch with us by messaging us and we will sort
              you out. </p>
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
                      <input id="name" v-model="contact.name" class="form-control" data-error="Please enter your name"
                             placeholder="Name" required
                             type="text">
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-6 form-line">
                    <div class="form-group">
                      <input id="email" v-model="contact.email" class="form-control"
                             data-error="Please enter your Email"
                             placeholder="Email" required
                             type="email">
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12 form-line">
                    <div class="form-group">
                      <input id="msg_subject" v-model="contact.subject" class="form-control"
                             data-error="Please enter your message subject" placeholder="Subject"
                             required type="tel">
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                        <textarea id="message" v-model="contact.message" class="form-control"
                                  data-error="Write your message"
                                  placeholder="Write a message"
                                  required
                                  rows="4"></textarea>
                    </div>
                    <div class="form-submit">
                      <button class="btn btn-common" type="submit" @click.prevent="submit">
                        <div class="flex">
                          <i aria-hidden="true" class="fa fa-paper-plane"></i>
                          Send Message
                        </div>
                        <Loader v-if="loading"/>
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
