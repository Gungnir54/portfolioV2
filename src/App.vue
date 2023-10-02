<template>
  <div class="app-container">
    <SideBar class="sidebar"/>
    <div class="views-container">
      <AboutView />
      <SkillsView />
      <ProjectView />
      <ContactView />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import AboutView from '@/views/AboutView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ProjectView from '@/views/ProjectView.vue';
import ContactView from '@/views/ContactView.vue';
</script>

<style lang="scss">
body {
  margin: 0 !important;
  padding: 0;
  background-image: url('@/assets/background-forest.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: var(--white-font-color);
  text-decoration: none;
  list-style: none;
  outline: none;
}

:root {
  --white-font-color: #f5f6f8;
  --grey-font-color: #97a2b1;
  --activated-link: #363636;
}

.app-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100vw;
}

.sidebar {
  width: 20%;
  position: fixed;
}

.views-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 20%;
  height: 100vh;
  padding: 0 1%;
}
</style>
