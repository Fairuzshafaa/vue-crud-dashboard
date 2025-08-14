<template>
  <div class="card">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Enroll Number</th>
          <th>Date of admission</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td><img :src="row.avatar" class="avatar" alt="" /></td>
          <td>{{ row.name }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.phone }}</td>
          <td>{{ row.enroll }}</td>
          <td>{{ row.date }}</td>
          <td class="actions">
            <Pencil class="icon" @click="$emit('edit', index, row)" />
            <Trash2 class="icon delete" @click="$emit('delete', index)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { Pencil, Trash2 } from "lucide-vue-next";

defineProps({
  rows: Array,
});
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 12px;
  border-bottom: 1px solid var(--border);
  text-align: left;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.actions {
  display: flex;
  gap: 8px;
}
.icon {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.delete {
  color: #e74c3c;
}
</style>
