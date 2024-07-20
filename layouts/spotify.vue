<template>
    <div class="overflow-hidden flex flex-wrap w-screen">
        <div class="md:w-1/12">
            <Menu />
        </div>      
        <div class="md:w-11/12 h-screen overflow-y-scroll">
            <div class="container md:px-0 px-6 mx-auto my-12">
                <slot />
            </div>              
        </div>     
    </div>   
</template>