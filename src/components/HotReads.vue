<template>
  <div class="text-darkGreen text-2xl px-6 ml-10 mx-auto  space-y-0 top-[450px] absolute
  ">
        <div class="flex mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mt-1">
  <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
   </svg>
   Hot Reads
   </div>

       <div
            class="grid gap-8   grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 p-5"
        >
           
                <div
                    
                    class="rounded-md border border-1 border-gray-200 transition-colors"
                v-for="book in books.slice(0,5)" :key="book">
                    <a 
                       class="aspect-w-3 aspect-h-2 block overflow-hidden border border-1 border-gray-50">
                       
                       <img
                            src="../assets/base.png"
                            alt=""
                            class="object-cover rounded-lg hover:scale-105 hover:rotate-1 transition-transform h-60 w-full
                            "
                        />

                   
                        
                    </a>
                    
                   
                </div>
               
          
        </div>
 


      </div>
</template>

<script setup>
import { ref} from 'vue'
import data from "../data/books.json"

const books = ref(data);
</script>

<style>

</style>