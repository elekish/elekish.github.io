<template>
  <div id="app">
    <header>
      <h1>Ishita Biswas</h1>
      <nav>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
      </nav>
    </header>
    <main v-bind:class="fadeIn">
      <section id="landing">
          <p>Web Designer & Developer</p>
      </section>

      <section id="portfolio">
          <h2>My Work</h2>
          <div class="project-card">
              <img src="path_to_project_image1.jpg" alt="Project 1" />
              <h3>Project Title 1</h3>
              <p>Short description of the project.</p>
              <a href="#">View Details</a>
          </div>
      </section>
    </main>
    <footer>
      <p>© 2023 by Your Name. All rights reserved.</p>
      <div>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { fadeIn } from 'vue-animations'

export default {
  name: 'App',
  data() {
    return {
      fadeIn: fadeIn
    }
  }
}
</script>

<style>
/* ... Your previous styles go here ... */

/* Responsiveness */
@media (max-width: 768px) {
  header, main, footer {
    padding: 20px;
  }
  /* Adjust styles for mobile view as needed */
}
</style>
