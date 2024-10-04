<template>
  <div :class="$style.home">
    <h3>Добро пожаловать на мой сайт-визитку!</h3>
    <p>Меня зовут Артём, и я frontend-разработчик на Vue.js</p>

    <section :class="$style.section">
      <h4>Обо мне</h4>
      <p>Я разработчик с почти 3 годами опыта работы над клиентскими приложениями. Люблю создавать эффективные и оптимизированные решения, делюсь знаниями и постоянно развиваюсь.</p>
    </section>

    <section :class="$style.section">
      <h4>Навыки</h4>
      <ul>
        <li>HTML, CSS, SASS/SCSS, JavaScript, TypeScript</li>
        <li>Vue 2/3, Nuxt 3, Vuex, Pinia, i18n</li>
        <li>UI библиотеки: Ant Design, PrimeVue, Bootstrap</li>
        <li>Инструменты: Git, SQL, Python, Shell</li>
      </ul>
    </section>

    <section :class="$style.section">
      <h4>Проекты</h4>
      <ul>
        <li>
          Приложение для арбитража криптовалют: оптимизация производительности и разработка новых экранов.
        </li>
        <li>
          Система управления рабочими сменами:
          интерфейс для отслеживания рабочего времени, генерации отчетов и проведения выплат.
        </li>
        <li>
          Приложение для менеджмента расписания работников частной поликлиники:
          интерфейс постановки сотрудников на смены.
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" module>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 30px 20px;
  font-size: 18px;
}

h4 {
  margin-bottom: 10px;
  font-size: 22px;
}

ul {
  padding-left: 20px;
  list-style-type: disc;
}

@media (max-width: 768px) {
  .home {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .home {
    font-size: 14px;
  }
}
</style>
