<template>
  <div :class="styles.container">
    <PredictCard v-if="expert" :expert="expert" />
    <p v-else>Не удалось загрузить карточку</p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

import { PredictCard } from "widgets/predict-card";
import { type ExpertRead, useExpertStore } from "entities/expert";

import styles from "./styles.module.css";

const { fetchExpert } = useExpertStore();

const isLoading = ref<boolean>(false);
const expert = ref<ExpertRead | null>(null);

const getExpert = async (): Promise<void> => {
  const response = await fetchExpert();
  expert.value = response;
};

const getCardInfo = async (): Promise<void> => {
  isLoading.value = true;

  try {
    Promise.all([getExpert()]);
  } catch (e) {
    expert.value = null;
    return;
  } finally {
    isLoading.value = false;
  }
};

onBeforeMount(async () => {
  await getCardInfo();
});
</script>
