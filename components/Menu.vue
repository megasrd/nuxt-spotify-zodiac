<template>
    <div class="lg:h-full lg:max-w-24 w-full shadow-lg">
        <div class="lg:flex lg:items-center lg:h-full w-full lg:py-5 bg-slate-950">
            <ul class="lg:block grid grid-cols-5 list-none text-white w-full">
                <li :class="routePath == '/dashboard' ? 'active' : ''" class="menu-item py-4 lg:w-full  lg:px-4 px-1 cursor-pointer">
                    <NuxtLink to="/dashboard"> 
                        <span class="block w-6 h-6 mx-auto mb-2 fill-white">
                            <svg style="pointer-events: none;" id="user-icon" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="m730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084q-29.747 19.159-51.175 57.729t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"></path></svg>
                        </span>
                        <label class="block text-center text-xs cursor-pointer"> Profile </label>
                    </NuxtLink>
                </li>
                <li :class="routePath == '/top-artists' ? 'active' : ''" class="menu-item py-4 lg:w-full  lg:px-4 px-1 cursor-pointer">
                    <NuxtLink to="/top-artists"> 
                        <span class="block w-6 h-6 mx-auto mb-2 fill-white">
                            <svg style="pointer-events: none;" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 47.5 47.5" xml:space="preserve"><title>Microphone</title><g><path d="M44.159,3.341C41.932,1.115,39.013,0,36.093,0c-2.919,0-5.838,1.114-8.064,3.341c-4.454,4.454-4.454,11.677,0,16.131     c2.227,2.227,5.146,3.341,8.064,3.341s5.839-1.114,8.066-3.341C48.613,15.019,48.613,7.796,44.159,3.341z"></path><path d="M22.161,14.999L0.646,39.161c-0.9,1.011-0.854,2.604,0.103,3.562l1.132,1.133L1.158,44.58     c-0.477,0.477-0.477,1.256,0,1.731l0.108,0.108c0.477,0.478,1.256,0.478,1.733,0l0.723-0.724l1.055,1.055     c0.957,0.957,2.552,1.003,3.563,0.104l24.155-21.509c-2.469-0.633-4.739-1.902-6.589-3.752     C24.019,19.706,22.779,17.416,22.161,14.999z M21.02,29.268l-5.145,5.146c-0.77,0.771-2.018,0.771-2.787,0     c-0.769-0.771-0.77-2.02,0-2.787l5.145-5.146c0.77-0.771,2.018-0.771,2.787,0C21.789,27.251,21.79,28.499,21.02,29.268z"></path></g></svg>
                        </span>
                        <label class="block text-center text-xs cursor-pointer"> Top Artists </label>
                    </NuxtLink>
                </li>
                <li :class="routePath == '/top-tracks' ? 'active' : ''" class="menu-item py-4 lg:w-full  lg:px-4 px-1 cursor-pointer">
                    <NuxtLink to="/top-tracks"> 
                        <span class="block w-6 h-6 mx-auto mb-2 fill-white">
                            <svg style="pointer-events: none;" width="100%" height="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 489.164 489.164" xml:space="preserve"><path d="M159.582,75.459v285.32c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5s37.009,72.5,82.5,72.5 s82.5-32.523,82.5-72.5V168.942l245-60.615v184.416c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5 s37.009,72.5,82.5,72.5s82.5-32.523,82.5-72.5V0L159.582,75.459z"></path></svg>
                        </span>
                        <label class="block text-center text-xs cursor-pointer"> Top Tracks </label>
                    </NuxtLink>
                </li>
                <li :class="routePath == '/recent' ? 'active' : ''" class="menu-item py-4 lg:w-full  lg:px-4 px-1 cursor-pointer">
                    <NuxtLink to="/recent"> 
                        <span class="block w-6 h-6 mx-auto mb-2 fill-white">
                            <svg style="pointer-events: none;" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 510 510"><title>Time</title><g><g id="history"><path d="M267.75,12.75c-89.25,0-168.3,48.45-209.1,122.4L0,76.5v165.75h165.75    l-71.4-71.4c33.15-63.75,96.9-107.1,173.4-107.1C372.3,63.75,459,150.45,459,255s-86.7,191.25-191.25,191.25    c-84.15,0-153-53.55-181.05-127.5H33.15c28.05,102,122.4,178.5,234.6,178.5C402.9,497.25,510,387.6,510,255    C510,122.4,400.35,12.75,267.75,12.75z M229.5,140.25V270.3l119.85,71.4l20.4-33.15l-102-61.2v-107.1H229.5z"></path></g></g></svg>
                        </span>
                        <label class="block text-center text-xs cursor-pointer"> Recent </label>
                    </NuxtLink>
                </li>
                <li :class="routePath == '/playlists' ? 'active' : ''" class="menu-item py-4 lg:w-full  lg:px-4 px-1 cursor-pointer">
                    <NuxtLink to="/playlists"> 
                        <span class="block w-6 h-6 mx-auto mb-2 fill-white">
                            <svg style="pointer-events: none;" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 405.333 405.333" xml:space="preserve"><g><rect x="0" y="53.333" width="256" height="42.667"></rect><rect x="0" y="138.667" width="256" height="42.667"></rect><path d="M298.667,53.333v174.613c-6.72-2.453-13.76-3.947-21.333-3.947c-35.307,0-64,28.693-64,64c0,35.307,28.693,64,64,64     c35.307,0,64-28.693,64-64V96h64V53.333H298.667z"></path><rect x="0" y="224" width="170.667" height="42.667"></rect></g></svg>
                        </span>
                        <label class="block text-center text-xs cursor-pointer"> Playlists </label>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .menu-item.active {
        @apply bg-slate-800 lg:border-l-slate-800 lg:border-l-8 lg:border-t-0 border-t-4 border-l-blue-700;
    }
    .menu-item {
        @apply lg:border-l-8 lg:border-l-slate-950 transition-colors duration-200;
        &:hover {
            @apply border-blue-700;
        }
    }
</style>
<script setup>
    const routePath = computed(() => {
        const route = useRoute();
        return route.path;
    })
</script>


