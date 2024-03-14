<template>
    <div class="u-input-container">
        <input
          v-bind="$attrs"
          :placeholder="label"
          :value="modelValue"
          class="u-field"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  }
});
</script>
<style scoped>
.u-input-container {
  width: 100%;
  padding: 0;
  margin: 0;
}

.u-input-container input {
  background-color: var(--color-input);
}
</style>