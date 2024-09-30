<template>
  <div :class="styles.container" v-bind="$attrs">
    <span :class="styles.avatar"></span>
    <p :class="styles.name">{{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ExpertRead } from "../model/types";

import styles from "./styles.module.css";

const props = defineProps<ExpertRead>();
</script>
