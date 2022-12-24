<template>
<div>Hello {{ value }}</div>
</template>

<script setup lang="ts">
const value = computedAsync(async () => useFetchedData(), "loading...")
</script>