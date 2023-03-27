<template>
  <div class="dark-blue">
    <div class="container what" id="what">
      <div class="title">
        <h2>{{ $t("what") }}</h2>
      </div>
      <div class="card-border">
        <div class="card" @click="completedStepsSpeedInc">
          <p>
            Создаю эффективные сайты, и веб приложения на стеке Nuxt, Node js
            (Express), MongoDB. В разработке использую SSR рендеринг для
            оптимизации скорости загрузки сайта, и более детальной настройки
            SEO, дабы поисковые роботы поднимали сайт выше в топ поиска при
            запросе по ключевым словам.
          </p>
        </div>
      </div>
      <div class="what__tests">
        <client-only>
          <div class="what__tests__circle" v-parallax="0.1">
            <RadialProgressBar
              class="circle-progress-bar"
              :diameter="200"
              :completed-steps="completedStepsSpeed"
              :total-steps="totalSteps"
            >
              <p>{{ completedStepsSpeed }}</p>
            </RadialProgressBar>
            <p>Производительность</p>
          </div>
          <div class="what__tests__circle" v-parallax="0.1">
            <RadialProgressBar
              class="circle-progress-bar"
              :diameter="200"
              :completed-steps="completedStepsSpe"
              :total-steps="totalSteps"
            >
              <p>{{ completedStepsSpe }}</p>
            </RadialProgressBar>
            <p>Специальные возможности</p>
          </div>
          <div class="what__tests__circle" v-parallax="0.1">
            <RadialProgressBar
              class="circle-progress-bar"
              :diameter="200"
              :completed-steps="completedStepsR"
              :total-steps="totalSteps"
            >
              <p>{{ completedStepsR }}</p>
            </RadialProgressBar>
            <p>Рекомендации</p>
          </div>
          <div class="what__tests__circle" v-parallax="0.1">
            <RadialProgressBar
              class="circle-progress-bar"
              :diameter="200"
              :completed-steps="completedStepsS"
              :total-steps="totalSteps"
            >
              <p>{{ completedStepsS }}</p>
            </RadialProgressBar>
            <p>Поисковая оптимизация</p>
          </div>
          <div class="what__tests__circle" v-parallax="0.1">
            <div class="what__tests__circle__pwa">
              <img src="../../assets/img/67676.png" alt="" />
            </div>
            <p>PWA</p>
          </div>
        </client-only>
      </div>
      <div class="arrow-down" v-parallax="0.1">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
          width="20px"
          height="20px"
        >
          <g>
            <path
              d="M10.7,172.1l219.4,219.4c6.8,6.8,16.2,10.7,25.9,10.7s19.1-3.9,25.9-10.7l219.4-219.4c14.3-14.3,14.3-37.4,0-51.7
		s-37.4-14.3-51.7,0L256,314L62.4,120.4c-14.3-14.3-37.4-14.3-51.7,0C-3.6,134.7-3.6,157.9,10.7,172.1L10.7,172.1z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from "../UI/RadialProgressBar.vue";

export default {
  components: {
    RadialProgressBar,
  },
  data() {
    return {
      completedStepsSpeed: 5,
      completedStepsSpe: 10,
      completedStepsR: 10,
      completedStepsS: 10,
      totalSteps: 100,
    };
  },

  computed: {},
  methods: {
    completedStepsSpeedInc() {
      this.completedStepsSpeed = this.completedStepsSpeed + 94;
      this.completedStepsSpe = this.completedStepsSpe + 90;
      this.completedStepsR = this.completedStepsR + 90;
      this.completedStepsS = this.completedStepsS + 90;
    },
  },
};
</script>

<style>
</style>