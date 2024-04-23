<template>
    <div class="u-input-container">
        <input
          v-bind="$attrs"
          :placeholder="props.label"
          :value="props.modelValue"
          class="u-field"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
    </div>
    <!-- {{ filteredValidation }} -->
    <template class="u-validation-error">
        <span v-for="valErrMsg in filteredValidation" :key="valErrMsg.msg">{{ valErrMsg.msg }}</span>
    </template>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

interface validationError {
    type: string,
    value: string,
    msg: string,
    path: string,
    localtion: string
}

const isValid = ref(false);

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
  validation: {
    type: Array,
    default: () => []
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