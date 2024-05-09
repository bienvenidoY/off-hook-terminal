<template>
  <div class="min-h-screen bg-purple-400 flex justify-center items-center overflow-hidden">
    <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
    <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
    <form class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">登 录</h1>
        <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
      </div>
      <div class="space-y-4">

        <input type="text"
               placeholder="账号"
               v-model="formData.account"
               class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"/>

        <input type="text"
               placeholder="密码"
               v-model="formData.password"
               class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"/>
      </div>
      <div class="text-center mt-6">
        <button type="button" @click="handleLogin"
                :disabled="loading"
                class="inline-flex items-center justify-center w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
          <template v-if="loading">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            登录中...
          </template>
          <template v-else>
            登 录
          </template>
        </button>

      </div>
    </form>
    <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
    <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useMessage } from '@/hooks/web/useMessage';
const loading = ref(false);

const formData = reactive({
  account: 'zfc',
  password: '123456',
});

function validForm() {
  if(!formData.account) {
    return Promise.resolve(false)
  }
  if(!formData.password) {
    return Promise.resolve(false)
  }
  return Promise.resolve(true)
}

async function handleLogin() {

  const data = await validForm();

  if (!data) return;
/*  try {
    loading.value = true;
    const userInfo = await userStore.login({
      password: data.password,
      username: data.account,
    });
    if (userInfo) {
      notification.success({
        message: t('sys.login.loginSuccessTitle'),
        description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realName}`,
        duration: 3,
      });
    }
  } catch (error) {
    createErrorModal({
      title: '接口错误',
      content: (error as unknown as Error).message || '网络错误',
      getContainer: () =>  document.body,
    });
  } finally {
    loading.value = false;
  }*/
}
</script>

