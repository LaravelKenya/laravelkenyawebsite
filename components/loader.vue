<script lang="ts" setup>
</script>

<template>
  <div class="tw-items-center">
    <div class="lds-dual-ring">
    </div>
  </div>

</template>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 30px;
  height: 30px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 30px;
  height: 30px;
  margin: 4px;
  border-radius: 50%;
  border: 3px solid #151515;
  border-color: #111010 transparent #100e0e transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
