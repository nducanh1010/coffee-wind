<template>
  <footer class="w-[95%] xl:w-[67%] mx-auto pb-24 text-gray-500 text-sm">
    <div class="flex  flex-col md:flex-row text-center md:text-left gap12 md:gap-8">
      <div class="basis-2/6 flex flex-col">
        <div class="font-bold text-xl text-gray-800 mb-4">CoffeeStyle.</div>
        <div class="mb-8 md:mb-20">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </div>
        <div class="text-gray-400 hover:text-coffee-400">
          CoffeeStyle Inc. © 1996
        </div>
      </div>
      <div class="basis-1/6">
        <div class="uppercase tracking-wider font-semibold text-gray-600 mb-4">
          Menu
        </div>
        <div class="flex flex-col gap-3">
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#">Home</nuxt-link>
          </div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#"
              >Our Products</nuxt-link
            >
          </div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#">About</nuxt-link>
          </div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#">Contact</nuxt-link>
          </div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#"
              >Styleguide</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="basis-1/6">
        <div class="uppercase tracking-wider font-semibold text-gray-600 mb-4">
          FOLLOW US
        </div>
        <div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#">
              Facebook</nuxt-link
            >
          </div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#"
              >Instagram</nuxt-link
            >
          </div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#"
              >Pinterest</nuxt-link
            >
          </div>
          <div>
            <nuxt-link class="hover:text-coffee-400" to="#">Twitter</nuxt-link>
          </div>
        </div>
      </div>
      <div class="basis-2/6">
        <div class="uppercase tracking-wider font-semibold text-gray-600 mb-8 md:mb-4">
          CONTACT US
        </div>
        <div class="mb-4  ">We’re Always Happy to Help</div>
        <div class="mb-16 text-gray-800 font-semibold text-[22px] tracking-wide hover:text-coffee-400">nducanh1010@gmail.com</div>
        <div class=" text-gray-400 hover:text-coffee-400">Powered by Coffee Lover.</div>
      </div>
    </div>
  </footer>
</template>
