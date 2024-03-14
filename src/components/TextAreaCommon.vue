<template>
    <div class="u-text-area-container">
        <textarea
            v-bind="$attrs"
            :placeholder="label"
            :value="modelValue"
            :cols="col"
            :rows="row"
            class="u-field"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
        </textarea>
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
    },
    col: {
      type: String,
      default: "10",
    },
    row: {
      type: String,
      default: "5",
    }
});
</script>
<style scoped>
.u-text-area-container {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: none;
    background-color: var(--color-input);
    height: 5rem;
  }
</style>