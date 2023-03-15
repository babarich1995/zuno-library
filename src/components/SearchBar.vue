<template>
  <div class="flex">
    <Listbox v-model="selectedCategory">
      <div class="relative">
        <ListboxButton
          class="flex-shrink-0 inline-flex w-full cursor-default
             py-2.5  pl-3 pr-10 text-left bg-gray-100 border border-gray-300  
           focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
             focus-visible:ring-offset-darkGreen sm:text-sm"
        >
          <span class="block truncate">{{selectedCategory.Description || 'All Category'}}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
           <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="divide-y z-40 divide-gray-100 absolute mt-1 max-h-60 w-44 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="type in types"
              :key="type.Code"
              :value="type"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ type.Description }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>

    
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-darkGreen bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
             " placeholder="Find the book you like..." required v-model="searchTitle">
            <button type="submit" class="absolute top-0 flex right-0 p-2.5 text-sm font-medium text-white bg-secondary rounded-r-lg border border-darkGreen hover:bg-darkGreen focus:ring-4 focus:outline-none focus:ring-green-300">
                <span class="mr-4">Search</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                
            </button>
        </div>

  </div>

  <section class="mt-10 flex-1">
   <div class="text-darkGreen text-2xl flex">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mt-2 mr-2">
  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
  </svg>
   Book Shelf
   </div>
   
     <div
            class="grid gap-8   grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5"
        >
           
                <!-- Book Item -->
                <div
                    
                    class="rounded-md border border-1 border-gray-200 transition-colors"
                v-for="book in filteredBooks" :key="book.BibNum">
                    <a 
                       class="aspect-w-3 aspect-h-2 block overflow-hidden border border-1 border-gray-50">
                       <div class="relative">
                       <img
                            src="../assets/base.png"
                            alt=""
                            class="object-cover rounded-lg hover:scale-105 hover:rotate-1 transition-transform h-60 w-full
                            "
                        />

                    <div class="absolute inset-0 flex justify-end p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    </div>
                        
                    </a>
                    <div class="p-4">  
                        <h5 class="font-bold">
                           {{book.Title.length > 50 ? splice(book.Title) + '...' : book.Title}}
                        </h5>
                        <p class="text-sm">{{book.Author}}</p>
                    </div>
                    <div class="flex  py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-yellow-400 mr-2">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                     5.0
                    </div>
                </div>
                <!--/ Book Item -->
          
        </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import mediatypes from "../data/media_type.json"
import data from "../data/books.json"
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'


const types = reactive(mediatypes);
const books = ref(data);
const searchTitle = ref('');

const selectedCategory = ref(types[0])

 const filteredBooks = computed(() => {
      return books.value.filter(book => {
        return book.Title.toLowerCase().includes(searchTitle.value.toLowerCase());
      });
    });

function splice(str){
     return str.slice(0,50)
}
</script>
