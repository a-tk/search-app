<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 href="{{ link }}" >{{ title }}</h1>
  <br>
  <p>{{ desc }}</p>
</template>
