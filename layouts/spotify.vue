<template>
    <div class="overflow-hidden flex flex-wrap w-screen">
        <div class="md:w-1/12 md:static fixed bottom-0 left-0 w-full">
            <Menu />
        </div>      
        <div class="md:w-11/12 w-full md:h-screen md:overflow-y-scroll">
            <div class="container px-0 mx-auto my-12">
                <slot />
            </div>              
        </div>     
    </div>   
</template>