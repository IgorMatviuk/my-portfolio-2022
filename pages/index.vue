<template>
  <div>
    <Main />
    <div class="border"></div>
    <AboutMe />
    <div class="border"></div>
    <What />
    <div class="border"></div>
    <WhatPerformance />
    <div class="border"></div>
    <WhatSpecial />
    <div class="border"></div>
    <WhatOpt />
    <div class="border"></div>
    <WhatSeo />
    <div class="border"></div>
    <Experience />
    <div class="border"></div>
    <Skills />
    <div class="border"></div>
    <Contacts />
    <div class="border"></div>
  </div>
</template>

<script>
import Main from "../components/sections/Main.vue";
import What from "../components/sections/What.vue";
import Experience from "../components/sections/Experience.vue";
import Skills from "../components/sections/Skills.vue";
import AboutMe from "../components/sections/About-me.vue";
import Contacts from "../components/sections/Contacts.vue";
import WhatPerformance from "../components/sections/What-sections/What-performance.vue";
import WhatSpecial from "../components/sections/What-sections/What-special.vue";
import WhatOpt from "../components/sections/What-sections/What-opt.vue";
import WhatSeo from "../components/sections/What-sections/What-seo.vue";
export default {
  name: "IndexPage",
  components: {
    Main,
    What,
    Experience,
    Skills,
    AboutMe,
    Contacts,
    WhatPerformance,
    WhatSpecial,
    WhatOpt,
    WhatSeo,
  },
};
</script>

<style>
</style>