<template>
  <div class="content-card-container">
    <div class="content-card">
      <div class="content-card-image">
        <img :src="image_url" alt="project image" />
      </div>
      <div class="content-card-text">
        <h4>{{ props.title }}</h4>
        <h6>{{ props.description }}</h6>
        <a v-if="props.link != ''" :href="props.link"><button class="btn animate">View on Github</button></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { getImageUrl } from '@/utils/utils';

const props = defineProps({
  title: String,
  description: String,
  image: String,
  link: String || '',
});

const image_url = getImageUrl(props.image);
</script>

<style lang="scss" scoped>
.content-card {
  background-color: rgb(12, 12, 12);
  border-radius: 1%;
  margin-top: 2%;
  padding: 5%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-card-image {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.content-card-image img {
  width: 75%;
  border-radius: 1%;
}

.content-card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-card-text h4 {
  font-size: 16px;
  padding: 0;
  margin: 5% 0;
  border-bottom: 1px solid var(--white-font-color);
  font-weight: bold;
}

.content-card-text h6 {
  font-size: 14px;
  padding: 0;
  margin: 0;
  font-weight: bold;
}

.content-card-text p {
  font-size: 14px;
  margin-bottom: 5%;
  font-weight: bold;
}

.content-card-text h6, .content-card-text p {
  color: var(--grey-font-color);
}

.content-card-text a {
  color: var(--white-font-color);
  text-decoration: none;
}

.animate {
  transition: all .5s;
  -moz-transition: all .5s;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  -ms-transition: all .5s;
}

.btn {
  width: auto;
  margin-top: 20%;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  background: transparent;
  color: var(--white-font-color);
  border-color: var(--grey-font-color);
  border-radius: 5px;

  &:hover {
    background-color: var(--grey-font-color);
    color: var(--white-font-color);
  }

  &:active {
    background-color: var(--activated-link);
  }
}
</style>