<script lang="ts" setup></script>

<template>
  <div>
    <LayoutHeader>
      <template #hero>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis nesciunt atque perferendis, ipsa doloremque deserunt cum qui.</p>
                  <div class="banner-btn">
                    <a href="#" class="btn btn-common">Get Ticket</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </LayoutHeader>
    <slot />
  </div>
</template>

<style scoped></style>
