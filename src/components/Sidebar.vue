<template>
  <aside class="sidebar">
    <!-- Brand -->
    <div class="brand">
      <span class="accent"></span>
      <h1>CRUD OPERATIONS</h1>
    </div>

    <!-- Profile -->
    <div class="profile">
      <img :src="user?.avatar" alt="Profile" class="avatar" />
      <div class="name">{{ user?.name }}</div>
      <div class="role">{{ user?.role }}</div>
    </div>

    <!-- Menu -->
    <nav class="menu">
      <a
        v-for="item in items"
        :key="item.label"
        :class="['item', { active: item.active }]"
      >
        <component :is="item.icon" class="icon" />
        <span>{{ item.label }}</span>
      </a>
    </nav>

    <!-- Logout -->
    <button class="logout" @click="logout">
      Logout
      <LogOut class="icon" />
    </button>
  </aside>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  Home,
  Bookmark,
  GraduationCap,
  CreditCard,
  FileText,
  Settings,
  LogOut,
} from "lucide-vue-next";

const store = useStore();
const router = useRouter();
const user = computed(() => store.getters["auth/user"]);

const items = [
  { icon: Home, label: "Home", active: true },
  { icon: Bookmark, label: "Course" },
  { icon: GraduationCap, label: "Students" },
  { icon: CreditCard, label: "Payment" },
  { icon: FileText, label: "Report" },
  { icon: Settings, label: "Settings" },
];

function logout() {
  store.dispatch("auth/logout");
  router.push("/login");
}
</script>

<style scoped>
.sidebar {
  background: var(--sidebar-bg);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: var(--space-4);
}
.brand .accent {
  width: 4px;
  height: 24px;
  background: var(--sidebar-active);
  border-radius: 2px;
}
.brand h1 {
  font-size: 14px;
  font-weight: 700;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: var(--space-4);
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.name {
  font-weight: bold;
}
.role {
  color: #f6b71d;
  font-size: var(--small);
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 8px;
  color: #3a3a3a;
  cursor: pointer;
}
.item.active {
  background: var(--sidebar-active);
  color: #fff;
}
.icon {
  width: 20px;
  height: 20px;
}

.logout {
  margin-top: auto;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #333;
}
</style>
