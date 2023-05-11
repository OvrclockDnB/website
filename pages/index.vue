<template>
  <figure class="flex justify-around content-center items-center min-h-screen" @mousemove="handleMouseMove">
      <img
          src="/images/logo.png"
          alt="Ovrclock logo"
          class="logo"
          id="logo"
          ref="logo"
          :style="{ transform: style }"
      />
  </figure>
</template>

<script setup>
const logo = ref(null);
const style = ref('perspective(800px) rotateX(0deg) rotateY(0deg)')

function handleMouseMove(event) {
  if (logo.value) {
    const rect = logo.value.getBoundingClientRect();
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;
    const rotateX = (event.clientY - imageCenterY) / rect.height * 10;
    const rotateY = (event.clientX - imageCenterX) / rect.width * 10;
    style.value = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
}
</script>

<style scoped lang="postcss">
.logo {
    max-width: 280px;
    width: 100%;
    height: auto;
}
</style>
