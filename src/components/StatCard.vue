<template>
  <div class="card stat" :style="styleObj">
    <component :is="icon" class="stat-icon" />
    <div>
      <div class="title">{{ title }}</div>
      <div class="value">{{ value }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: { type: Object, required: true },
  title: String,
  value: [String, Number],
  bg: String,
  gradient: Boolean,
});

const styleObj = computed(() => ({
  background: props.gradient
    ? "linear-gradient(135deg, #fdd835, #fbc02d)"
    : props.bg || "var(--black)",
  color: props.gradient ? "black" : "#333",
}));
</script>

<style scoped>
.stat {
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.stat-icon {
  width: 28px;
  height: 28px;
  color: #333;
}
.title {
  font-size: 14px;
  color: #555;
}
.value {
  font-size: 20px;
  font-weight: bold;
}
</style>
