<template>
  <div class="index-box">home</div>
</template>

<script setup>
import axios from 'axios'

const res = axios
  .get(
    'https://apis.tianapi.com/game/index?key=81162e9b9b251966bc1a2d61b99b6d1c&num=10'
  )
  .then((response) => {
    console.log(response)
  })
console.log(res)
</script>
