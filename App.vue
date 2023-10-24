<template>
  <div id="app">
    <header>
      <!-- EDIT: Replace with your name. -->
      <h1>Ishita Biswas</h1>
      <nav>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
      </nav>
    </header>
    <main>
      <section id="landing">
          <!-- EDIT: Replace with your profession/title. -->
          <p>Student at Jadavpur University(Junior year)</p>
      </section>

      <section id="portfolio">
          <h2>My Work</h2>
          <!-- We'll use a component to represent each project for modularity. -->
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id"
            :project="project" />
      </section>
    </main>
    <footer>
      <!-- EDIT: Update the year and name accordingly. -->
      <p>© 2023 by Your Name. All rights reserved.</p>
      <!-- EDIT: Update with your social media links. -->
      <div>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { fadeIn } from 'vue-animations';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      // This array should be populated with your project details.
      // EDIT: Add your projects here.
      projects: [
        {
          id: 1,
          title: 'Project Title 1',
          description: 'Short description of the project.',
          imgSrc: 'path_to_project_image1.jpg',
          detailLink: '#'
        },{
          id: 1,
          title: 'Project Title 1',
          description: 'Short description of the project.',
          imgSrc: 'path_to_project_image1.jpg',
          detailLink: '#'
        }
        
      ],
      fadeIn: fadeIn
    }
  }
}
</script>

<style>
/* ... Your previous styles go here ... */
</style>
