<template>
  <section class="projects-container">
  <h2 class="section-title">My Projects</h2>
  <div class="projects-content">
    <div v-for="(project, key) in projects" :key="key" class="project-section">
      <CardProject
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.link"
      />
    </div>
  </div>
 </section>
</template>

<script setup>
import CardProject from '@/components/CardProject.vue';

const projects = [
  {
    title: 'E-Commerce',
    description: "Creation of an E-Commerce site, this was our end-of-first-year project. We created a 'Hardware' sales site in the spirit of Top Achat or LDLC. We incorporated a comparator that tests the compatibility of parts. It took a team of 3 people 5 weeks to complete. The languages used were JavaScript and SQL, the Front was in React and the Back in Express with Prisma.",
    image: 'E-Commerce.png',
    link: 'https://github.com/Gungnir54/E-Commerce',
  },
  {
    title: 'Previously On',
    description: "Creation of a mobile application to track series, films and anime using the BetaSeries API. This project was carried out by two people in two weeks using React Native.",
    image: 'Previously_On.png',
    link: 'https://github.com/Gungnir54/Previously_On',
  },
  {
    title: 'Discord Bot',
    description: "Create a Discord server and its Bots. This was our final project, carried out by a team of three people over the course of the year. We had to come up with an idea, carry out a market study, create the specifications and carry it out, all the while working on our other projects.",
    image: 'Discord_Bot.png',
    link: 'https://github.com/Gungnir54',
  },
  {
    title: 'Projet RH',
    description: "This is my business project. It's aimed at the human resources department, with the aim of replacing Excel files in the form of a web app. It is used for employee integration, the creation of job descriptions, as well as for historizing and managing the rotation of job descriptions. I drew up the specifications, the customer survey, the retro planning, as well as the complete realization of the project, I finished by making its documentation to have a finished and usable project.",
    image: 'Projet_RH.png',
    link: ''
  }
];
</script>

<style lang="scss" scoped>
.projects-container {
  background-color: rgba(32, 32, 32, 0.8);
  border-radius: 1%;
  margin-top: 2%;
  padding-bottom: 5%;
  width: 100%;
}

.projects-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .project-section {
    width: 40%;
  }
}
</style>
