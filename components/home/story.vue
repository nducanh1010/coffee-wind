<template>
  <div class="ct-subheadline">
    <div class="ct-subheadline-deco-line"></div>
    <div class="ct-subheadline-label">Our Coffee Story</div>
    <div class="ct-subheadline-deco-line"></div>
  </div>
  <div
    class="story flex flex-col lg:flex-row justify-center gap-8 lg:gap-4 w-[95%] lg:w-[65%] mx-auto items-center"
  >
    <div class="basis-1/2">
      <video
        autoplay
        loop
        muted
        class="w-full h-full object-cover min-h-[333px]"
      >
        <source src="/video/coffee-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="text-center lg:text-left basis-1/2 lg:pl-6">
      <div class="text-3xl leading-10 mb-6">What is your special coffee?</div>
      <div class="text-gray-500 leading-7 mb-6">
        The French Press is a brewing method that comes closet to cupping.
        Cupping is the prescribed method by which coffee should be judged.
        Nothing separates the water from the coffee. To properly discover the
        flavours, it is best to drink the coffee this way. Everyone has their
        favourite brewing method.
      </div>
      <div>
        <NuxtLink
          href="#"
          class="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 after:hover:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-300;"
          >Read the full Story</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
