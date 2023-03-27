<template>
  <div id="main" class="black-theme">
    <kinesis-container>
      <div class="main">

        <div v-parallax="0.2" class="main__title-block">
          <div class="main__title-block__title">
            <h1>{{ $t("pro") }}</h1>
          </div>
          <div class="main__title-block__title">
            <h2>{{ $t("name") }}</h2>
          </div>
        </div>
        <div class="main__technology">
          <kinesis-element :strength="230">
            <img
              class="main__technology__item-nuxt"
              src="../../assets/img/colored-logo.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
          <kinesis-element :strength="150">
            <img
              class="main__technology__item-sass"
              src="../../assets/img/Sass_Logo_Color.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
          <kinesis-element :strength="200">
            <img
              class="main__technology__item-ts"
              src="../../assets/img/Typescript_logo_2020.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
          <kinesis-element :strength="200">
            <img
              class="main__technology__item-html"
              src="../../assets/img/html_logo.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
          <kinesis-element :strength="200">
            <img
              class="main__technology__item-css"
              src="../../assets/img/css-logo.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
          <kinesis-element :strength="200">
            <img
              class="main__technology__item-vue"
              src="../../assets/img/Vue_Logo.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
          <kinesis-element :strength="240"
            >а
            <img
              class="main__technology__item-js"
              src="../../assets/img/javascript_3.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
          <kinesis-element :strength="130">
            <img
              class="main__technology__item-web"
              src="../../assets/img/webpack_2.svg"
              alt="logrocket logo"
            />
          </kinesis-element>
        </div>
      </div>
    </kinesis-container>
  </div>
</template>

<script>

export default {

  methods: {
    onWheel(event) {
      console.log("wheel", event.deltaY);
    },
    onScroll(event) {
      console.log("scroll", event);
    },
  },
};
</script>

<style>
</style> 