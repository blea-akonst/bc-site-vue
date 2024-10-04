<template>
  <div :class="$style.footer">
    <span>Контакты:</span>
    <a href="mailto:artem3845@gmail.com">
      <img :class="$style.icon" src="../assets/email.svg" alt="email">
    </a>
    <a href="https://t.me/a_k_o_n_s_t" target="_blank">
      <img :class="$style.icon" src="../assets/tg.svg" alt="email">
    </a>
  </div>
</template>

<style lang="scss" module>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;

  height: 50px;
  background-color: #f8f8f8;
  color: #333;
  font-size: 14px;
  padding: 10px;
}

a, .icon {
  width: 24px;
  height: 24px;
}
</style>