<template>
  <header>
    <div class="header-container">
      <div></div>
      <div class="header-language">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      langs: ["RU", "EN"],
    };
  },
  methods: {
  }
};
</script>

<style>
</style>