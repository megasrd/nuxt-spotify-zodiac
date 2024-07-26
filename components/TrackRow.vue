<template>
  <div class="mb-2">
    <NuxtLink :to="`${props.to}`"> 
      <div class="track-grid py-3 px-3 rounded-lg hover:bg-slate-800">
        <div>
          {{ props.keyIndex + 1 }}
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <img :src="props.image" class="xl:w-18 md:w-10 rounded-lg" />
            <div>
              <label class="xl:text-base text-sm font-semibold text-white truncate"> {{ truncateText(props.trackTitle) }} </label>
              <span class="block">
                <span class="inline-block bg-gray-500 text-xs font-bold w-5 mr-3 text-center" v-if="props.explicit">
                  E
                </span>
                <label class="inline-block cursor-pointer hover:underline text-xs text-slate-400 mr-3" v-for="artist in props.artists" :key="artist.name">
                  <NuxtLink :to="`/artist/${artist.id}`"> 
                    {{ artist.name }}
                  </NuxtLink>
                </label>
              </span>
            </div>
          </div>
        </div>
        <div>  
          <label class="xl:text-sm text-xs text-slate-300">
            {{ props.albumTitle }}
          </label>
        </div>
        <div>       
          <label class="text-sm text-slate-300">
            {{ unixToMinutes(props.trackDuration) }}
          </label>
        </div>                    
      </div>     
    </NuxtLink>  
  </div>
</template>

<script setup>
  const props = defineProps({
    to: {
      type: String
    },
    keyIndex: {
      type: Number,
      default: 1
    },
    image: {
      type: String
    },
    trackTitle: {
      type: String,
      default: 'Track Title'
    },
    artists: {
      type: Object
    },
    albumTitle: {
      type: String,
      default: 'Album Title'
    },
    explicit: {
      type: Boolean,
      default: false
    },
    trackDuration: {
      type: Number
    }
  })
  const unixToMinutes = (timestamp) => {
    let m = new Date(timestamp).getMinutes()
    let s = new Date(timestamp).getSeconds()
    m = (m<10) ? '0' + m : m;
    s = (s<10) ? '0' + s : s;

    return `${m}:${s}`;
  }  

  const truncateText = (text) => {
    return `${text.substring(0, 21)}`
  }
</script>

<style lang="scss" scoped>
  .track-grid {
    display: grid;
    align-items: center;
    grid-template-columns: 0.05fr 1fr 1fr 0.1fr;
    gap: 12px;
  }
</style>