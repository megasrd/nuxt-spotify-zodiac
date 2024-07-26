<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    body {
        @apply bg-slate-900 text-white;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;   
        font-style: normal;     
    }
    .page-enter-active,
    .page-leave-active {
      transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
      opacity: 0;
    }    
    .display-grid-lg {
      @apply grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-8 sm:gap-8 gap-4;
    }
    .display-grid-md {
      @apply grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8;
    }    
    .display-grid-sm {
      @apply grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8;
    }        
</style>
<script setup>
useSeoMeta({
  title: 'Your Spotify Profile'
})
</script>
