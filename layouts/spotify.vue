<template>
    <div class="overflow-hidden flex flex-wrap w-screen">
        <div class="lg:w-1/12 lg:static fixed bottom-0 left-0 w-full z-50">
            <Menu />
        </div>      
        <div class="lg:w-11/12 w-full lg:h-screen md:overflow-y-scroll lg:pb-0 pb-16">
            <div class="container px-4 mx-auto my-12">
                <slot />
            </div>              
        </div>     
    </div>   
</template>