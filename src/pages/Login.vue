<template>
  <div class="login-wrap">
    <div class="login-card card">
      <div class="brand">
        <span class="accent"></span>
        <h1>CRUD OPERATIONS</h1>
      </div>
      <h2 class="center">SIGN IN</h2>
      <p class="muted center">Enter your credentials to access your account</p>

      <form class="grid" @submit.prevent="onSubmit">
        <!-- Email -->
        <label class="grid">
          <span class="label">Email</span>
          <input
            class="input"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </label>

        <!-- Password -->
        <label class="grid">
          <span class="label">Password</span>
          <div class="password-wrapper">
            <input
              class="input"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Enter your password"
              required
            />
            <component
              :is="showPassword ? EyeOff : Eye"
              class="icon-eye"
              @click="togglePassword"
            />
          </div>
        </label>

        <p v-if="error" class="error">Please input the right Email/Password</p>

        <button class="btn btn-signin" type="submit">SIGN IN</button>
      </form>

      <!-- Forgot password -->
      <p class="small muted center">
        Forgot your password?
        <a class="link-reset">Reset Password</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Eye, EyeOff } from "lucide-vue-next";

const store = useStore();
const router = useRouter();
const email = ref("karthi@gmail.com");
const password = ref("123456");
const error = ref(false);
const showPassword = ref(false);

function togglePassword() {
  showPassword.value = !showPassword.value;
}

async function onSubmit() {
  error.value = false;
  const ok = await store.dispatch("auth/login", {
    email: email.value,
    password: password.value,
  });
  if (ok) router.push("/");
  else error.value = true;
}
</script>

<style scoped>
.login-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffc72a, #f2a61b);
  padding: var(--space-5);
}

.login-card {
  width: min(440px, 95vw);
  padding: var(--space-5);
  text-align: left;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: var(--space-3);
}
.brand .accent {
  width: 6px;
  height: 28px;
  background: var(--sidebar-active);
  border-radius: 4px;
}

h1 {
  font-size: 24px;
  margin: 0;
}
h2.center,
p.center {
  text-align: center;
}
h2 {
  margin: 0 0 6px 0;
  font-size: 18px;
  letter-spacing: 1px;
}
.muted {
  color: var(--muted);
}
.label {
  font-size: 12px;
  color: var(--muted);
}
.small {
  font-size: var(--small);
  margin-top: var(--space-2);
}
.error {
  color: #c0392b;
  margin-top: 10px;
}
.grid {
  gap: 14px;
}

.input {
  height: 44px;
  border-radius: 10px;
  border: 1px solid var(--border);
  padding: 0 14px;
  font-size: var(--body);
  width: 100%;
}

.password-wrapper {
  position: relative;
  width: 100%;
}
.password-wrapper .input {
  padding-right: 40px; /* space for the eye icon */
}
.icon-eye {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--muted);
  cursor: pointer;
}

/* Button */
.btn-signin {
  background: var(--sidebar-active);
  color: white;
  font-weight: bold;
}

/* Reset password */
.link-reset {
  color: #f5a623;
  text-decoration: underline;
}
.center {
  text-align: center;
}
</style>
