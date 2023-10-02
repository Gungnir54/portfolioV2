<template>
  <aside>
    <div class="sidebar-container">
      <a href="#AboutView" class="sidebar-logo-container">
        <img class="sidebar-logo" src="../assets/full-logo.png" alt="logo" />
      </a>
      <div id="animated-logo"></div>
      <div class="sidebar-links">
        <a href="#AboutView">About</a>
        <a href="#SkillsView">Skills</a>
        <a href="#ProjectView">Projects</a>
        <a href="#ContactView">Contact</a>
      </div>
    </div>
  </aside>
</template>

<script setup>
// import { initAnimation } from '../utils/AnimatedLogo.js';
// import { onMounted } from 'vue';

// onMounted(() => {
//   initAnimation();
// });
</script>

<style lang="scss" scoped>
aside {
  width: 20%;
  z-index: 100;
  // position: fixed;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.40);
}

a {
  text-decoration: none;
  color: var(--white-font-color);
  transition: 0.2s ease-out;
  &:hover {
    color: var(--grey-font-color);
  }
  &:active {
    color: var(--activated-link);
  }
}

.sidebar-logo-container {
  width: 60%;
  margin: 50% 0;
}

.sidebar-logo {
  width: 100%;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin: 1rem 0;
    padding: 1rem 0;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>