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
</style>
<script>
export default {
  setup() {
    
  },
}
</script>
