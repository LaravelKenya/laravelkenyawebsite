<script lang="ts" setup>
import {useUserSpeakerStore} from "~/stores/useUserSpeakerStore";

const speakersStore = useUserSpeakerStore()
speakersStore.getSpeakers()
</script>

<template>
  <section id="team" class="section-padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">
              Our Speakers
            </h2>
            <p class="wow fadeInDown" data-wow-delay="0.2s">
              We have great speakers and they are professional in what the do.<br/>
              <b>You want to be a speaker??</b> Contact us to make you as one of our speakers.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-bt">
        <div v-for="(speaker, i) in speakersStore.speakers" class="col-lg-3 col-md-6 col-xs-12">
          <div class="team-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="team-img">
              <nuxt-img alt="" class="img-fluid" src="/assets/img/team/team-01.jpg"/>
              <div class=" text-center">
                <ul class="row mt-2">
                  <li v-if="speaker.twitter" class="col-3">
                    <a :href="speaker.twitter" target="_blank">
                      <NuxtIcon filled name="twitter"/>
                    </a>
                  </li>
                  <li v-if="speaker.github" class="col-3">
                    <a :href="speaker.github" target="_blank">
                      <NuxtIcon filled name="github"/>
                    </a>
                  </li>
                  <li v-if="speaker.linkedIn" class="col-3">
                    <a :href="speaker.linkedIn" target="_blank">
                      <NuxtIcon filled name="linkedin"/>
                    </a>
                  </li>
                  <li v-if="speaker.website" class="col-3">
                    <a :href="speaker.website" target="_blank">
                      <NuxtIcon filled name="website"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="info-text">
              <h3><a href="#">{{ speaker.user?.name }}</a></h3>
              <p class="tw-truncate">{{ speaker.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.nuxt-icon svg {
  width: 2.25rem;
  height: 2.25rem;
}
</style>
