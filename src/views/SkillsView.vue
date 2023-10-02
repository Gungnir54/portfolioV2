<template>
 <section class="study-skills-container">
  <div class="study-skills-content">
    <h2 class="section-title">Skills and Study background</h2>
    <div class="study-skills-section">
      <div class="skills-section">
        <div class="front-section">
          <h4>Frontend Languages and Frameworks</h4>
          <p>JavaScript / Vue3 and React</p>
        </div>
        <div class="back-section">
          <h4>Backend Languages and Frameworks</h4>
          <p>PHP / Symfony6 and Lumen</p>
        </div>
        <div class="db-section">
          <h4>Database Language</h4>
          <p>SQL / MySQL</p>
        </div>
        <div class="other-section">
          <h4>Aditionnal languages</h4>
          <p>TypeScript</p>
        </div>
      </div>
      <div class="study-container">
        <div class="study-part">
          <h4>Pré Msc/Msc Pro at Epitech</h4>
          <h6>Sep 2021 -> Today</h6>
          <p>Cybersecurity and Cloud System</p>
        </div>
        <div class="study-part separator">
          <h4>Web@cademie by Epitech</h4>
          <h6>Oct 2021 -> Sep 2023 at Epitech</h6>
          <p>Web developement FullStack</p>
        </div>
        <div class="study-part">
          <h4>Brevet Professionnel Boucher</h4>
          <h6>Sep 2010 -> Aug 2012</h6>
        </div>
        <div class="study-part">
          <h4>CAP Boucher</h4>
          <h6>Sep 2008 -> Aug 2010</h6>
        </div>
      </div>
    </div>
  </div>
 </section>
</template>

<script setup></script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  padding-left: 0;
}

h4 {
  font-size: 16px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--white-font-color);
  font-weight: bold;
}

h6 {
  font-size: 14px;
  padding: 0;
  margin: 0;
  font-weight: bold;
}

h4 {
  font-size: 16px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--white-font-color);
  font-weight: bold;
}

p {
  font-size: 14px;
  margin-bottom: 5%;
  font-weight: bold;
}

h6, p {
  color: var(--grey-font-color);
}

.study-skills-container {
  background-color: rgba(32, 32, 32, 0.8);
  border-radius: 1%;
  margin-top: 2%;
  padding-bottom: 5%;
  width: 100%;
}

.study-skills-section {
  display: flex;
  justify-content: space-between;
}

.skills-section {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 2%;
}

.study-container {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.separator {
  margin-bottom: 5%;
}

.study-part {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  height: auto;
  padding-right: 5%;
  margin-bottom: 2%;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: auto;
  margin: 0 0 5% 0;
  
  .img-tek {
    width: 100%;
    height: auto;
  }
}
</style>
