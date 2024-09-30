<template>
  <div :class="styles.card">
    <Expert v-bind="expert" />
  </div>
</template>

<script setup lang="ts">
import { Expert, type ExpertRead } from "entities/expert";

import styles from "./styles.module.css";
import { computed } from "vue";

interface PredictCard {
  expert: ExpertRead;
}

const props = defineProps<PredictCard>();

const expert = computed(
  (): ExpertRead => ({
    ...props.expert,
  })
);
</script>
