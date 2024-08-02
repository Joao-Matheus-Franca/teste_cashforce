<script setup>
import MainHeader from './components/MainHeader.vue'
import MainNavbar from './components/MainNavbar.vue'
import MainContent from './components/MainContent.vue'
</script>

<template>
  <MainHeader/>
  <MainNavbar/>
  <MainContent/>
</template>

<style>
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0px;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
