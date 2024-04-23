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
    <!-- {{ filteredValidation }} -->
    <template class="u-validation-error">
        <span v-for="valErrMsg in filteredValidation" :key="valErrMsg.msg">{{ valErrMsg.msg }}</span>
    </template>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const filteredValidation = computed(() => props.validation.filter((msg) => msg.path.toLowerCase() === props.label.toLowerCase()));

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
    },
    validation: {
      type: Array,
      default: () => []
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
  font-family: Roboto,
  Oxygen,
  Ubuntu,
  Cantarell,
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  sans-serif;
}

.u-validation-error {
  margin-left: 1rem;
  color: var(--color-warning);
  display: flex;
  font-size: .8rem;
  flex-direction: column;
  color: var(--color-warning);
}

@media screen and (max-width: 768px) {
  .u-validation-error {
    margin-left: 0;
  }
}
</style>