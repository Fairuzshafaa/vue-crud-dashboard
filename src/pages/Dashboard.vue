<template>
  <div class="layout">
    <Sidebar />

    <main class="content">
      <!-- Topbar -->
      <header class="topbar">
        <div class="search-wrapper">
          <Search class="icon-search" />
          <input class="search" placeholder="Search..." v-model="searchQuery" />
        </div>
        <Bell class="icon-bell" />
      </header>

      <!-- Stats -->
      <section class="stats grid">
        <StatCard
          :icon="GraduationCap"
          title="Students"
          :value="stats?.students || 0"
          bg="var(--card-students)"
        />
        <StatCard
          :icon="Bookmark"
          title="Course"
          :value="stats?.courses || 0"
          bg="var(--card-courses)"
        />
        <StatCard
          :icon="CreditCard"
          title="Payments"
          :value="`${stats?.paymentsLabel || ''} ${formatMoney(
            stats?.payments || 0
          )}`"
          bg="var(--card-payments)"
        />
        <StatCard
          :icon="User"
          title="Users"
          :value="stats?.users || 0"
          :gradient="true"
        />
      </section>

      <!-- Table -->
      <UsersTable :rows="filteredUsers" @edit="onEdit" @delete="onDelete" />
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Sidebar from "../components/Sidebar.vue";
import StatCard from "../components/StatCard.vue";
import UsersTable from "../components/UsersTable.vue";
import {
  Search,
  Bell,
  GraduationCap,
  Bookmark,
  CreditCard,
  User,
} from "lucide-vue-next";

const store = useStore();
const stats = computed(() => store.getters["dashboard/stats"]);
const users = computed(() => store.getters["dashboard/users"]);

const searchQuery = ref("");
const filteredUsers = computed(() => {
  return users.value.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function onEdit(index, row) {
  const newName = prompt("Edit name", row.name);
  if (newName)
    store.dispatch("dashboard/updateUser", {
      index,
      user: { ...row, name: newName },
    });
}

function onDelete(index) {
  if (confirm("Delete this data?"))
    store.dispatch("dashboard/deleteUser", index);
}

function formatMoney(v) {
  return v.toLocaleString("en-US");
}
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
  background: #fafafa;
}
.content {
  padding: var(--space-4);
}

/* Topbar */
.topbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: var(--space-4);
  gap: 16px;
}
.search-wrapper {
  position: relative;
  width: 280px;
}
.search {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid var(--border);
  padding: 0 40px 0 14px;
}
.icon-search {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--muted);
}
.icon-bell {
  width: 22px;
  height: 22px;
  color: var(--muted);
  cursor: pointer;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 20px;
}

@media (max-width: 1100px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
