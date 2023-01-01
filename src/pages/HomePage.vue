<template>
<HeroSection/>
<AboutSection/>
<SkillsSection/>
<PortfolioSection/>
</template>

<script>
import AboutSection from "../components/section/AboutSection.vue";
import HeroSection from "../components/section/HeroSection.vue";
import PortfolioSection from "../components/section/PortfolioSection.vue";
import SkillsSection from "../components/section/SkillsSection.vue";

export default {
    setup() {
        return {};
    },
    components: { HeroSection, AboutSection, PortfolioSection, SkillsSection }
}
</script>

<style scoped lang="scss">

</style>
