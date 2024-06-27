<template>
  <div>
    <div class="zodiac-select__wrapper max-w-80 mx-auto">
      <h2 class="text-white text-center font-semibold text-4xl">
        Select your Zodiac
      </h2>
      <div class="mt-12">
        <select v-model="selectedSign" class="text-slate-950 px-5 py-3 rounded-lg mx-auto w-full capitalize block">
          <option v-for="(sign, index) in zodiacs" :key="index">
            {{ index }}
          </option>
        </select>
        <div v-if="selectedSign.length > 1" class="zodiac-description mt-6">
          <label class="text-lg font-semibold text-slate-300 block mb-5"> Mood: <span class="font-normal capitalize"> {{ zodiacs[selectedSign].mood }} </span> </label>          
          <label class="text-lg font-semibold text-slate-300 block mb-5"> Personality:  </label>          
          <div class="flex flex-wrap gap-4">
            <span v-for="(item, key) in zodiacs[selectedSign].personality" :key="key" class="font-normal text-sm capitalize inline-block bg-green-700 rounded-full px-4 py-2"> 
              {{ item }}
            </span>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script setup>
  let selectedSign = ref('')
  const zodiacs = {
  "aries": {
    "mood": "fiery",
    "personality": ["confident", "determined", "energetic"]
  },
  "taurus": {
    "mood": "patient",
    "personality": ["reliable", "patient", "practical"]
  },
  "gemini": {
    "mood": "curious",
    "personality": ["versatile", "adaptable", "communicative"]
  },
  "cancer": {
    "mood": "emotional",
    "personality": ["empathetic", "nurturing", "intuitive"]
  },
  "leo": {
    "mood": "proud",
    "personality": ["confident", "generous", "charismatic"]
  },
  "virgo": {
    "mood": "analytical",
    "personality": ["practical", "detail-oriented", "perfectionist"]
  },
  "libra": {
    "mood": "harmonious",
    "personality": ["diplomatic", "charming", "balanced"]
  },
  "scorpio": {
    "mood": "intense",
    "personality": ["passionate", "determined", "mysterious"]
  },
  "sagittarius": {
    "mood": "optimistic",
    "personality": ["adventurous", "optimistic", "philosophical"]
  },
  "capricorn": {
    "mood": "ambitious",
    "personality": ["ambitious", "disciplined", "practical"]
  },
  "aquarius": {
    "mood": "innovative",
    "personality": ["innovative", "independent", "humanitarian"]
  },
  "pisces": {
    "mood": "compassionate",
    "personality": ["compassionate", "imaginative", "intuitive"]
  }
}


</script>
