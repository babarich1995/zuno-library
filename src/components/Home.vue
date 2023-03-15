<template>
   <div class="bg-primary">
    <NavBar/>  
    <Header/>
   
   </div>
      <HotReads class="hidden md:block"/>
       <section id="books" class="mt-[300px] mb-3">
  
      <div
        class="container  px-4 mx-auto mt-10 space-y-12 md:space-y-0"
      >
      <div>
       <SearchBar/>
      </div>
     
      </div>
    </section>
     <Footer/>
   
     
</template>

<script setup>
import SearchBar from "./SearchBar.vue"
import Footer from "./Footer.vue"
import NavBar from "./NavBar.vue"
import Header from "./Header.vue"
import HotReads from "./HotReads.vue"



</script>

<style>

</style>