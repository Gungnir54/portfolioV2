<template>
  <section class="about-container">
    <h2 class="section-title">About me</h2>
    <div class="about-content">
      <div class="about-infos">
        <ul>
          <li>Full Name: Vincent Becker</li>
          <li>Birthday: 23 July 1992</li>
          <li>Mail: <a href="mailto:vincent.becker@epitech.eu">vincent.becker@epitech.eu</a></li>
          <li>Phone: 07-62-04-10-07</li>
          <li>Country: France</li>
          <li>
            <a href="/CV_Vincent.pdf" download>
              <button class="btn animate">Download CV</button>
            </a>
          </li>
        </ul>
      </div>
      <div class="about-text">
        <p>A former Boucher manager, I'm now a FullStack Web developer following the 'Web@cademie' training program.
      I've just joined the Pré MSC Pro course at Epitech Nancy, with the aim of preparing a BAC+5 in cybersecurity. I'm looking for a work-study placement in the field of my specialization, to deepen the knowledge I'll be learning in school.
      Dynamic, curious and a good listener, I like teamwork as much as the autonomy this job offers.
      Passionate about Motorcycles, Tattoos, Gaming and recently about Code, I got into this business thanks to a friend.</p>
      </div>
      <div class="about-image">
        <img class="img-pp" src="../assets/pp-pro.png" alt="Photo de profil" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.about-container {
  background-color: rgba(32, 32, 32, 0.8);
  border-radius: 1%;
  margin-top: 2%;
  width: 100%;
}

.about-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 15px;
}

.section-title {
  color: var(--grey-font-color);
  padding-left: 5%;
}

.about-infos {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 2%;
  width: 20%;
  height: auto;
  
  li {
    list-style: none;
    border-bottom: 1px solid var(--white-font-color);
    margin-bottom: 7%;
    padding-bottom: 5%;

    &:last-child {
      border-bottom: none;
      margin: 0;
      padding: 0;
    }
  }

  a{
    text-decoration: none;
    color: var(--white-font-color);

    &:hover {
      color: var(--grey-font-color);
    }

    &:active {
      color: var(--activated-link);
    }
  }
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
  margin-top: 5px;
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

.about-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 0 10%;
  letter-spacing: 2px;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: auto;
}

.img-pp {
  width: 100%;
  height: auto;
}
</style>
