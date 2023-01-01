<template>
<HeroSection/>
<AboutSection/>
<SkillsSection/>
<PortfolioSection/>
<ContactSection/>
<div class="position-relative">
</div>
<SocialBar/>
</template>

<script>
import AboutSection from "../components/section/AboutSection.vue";
import ContactSection from "../components/section/ContactSection.vue";
import HeroSection from "../components/section/HeroSection.vue";
import PortfolioSection from "../components/section/PortfolioSection.vue";
import SkillsSection from "../components/section/SkillsSection.vue";
import SocialBar from "../components/SocialBar.vue";

export default {
    setup() {
        return {};
    },
    components: { HeroSection, AboutSection, PortfolioSection, SkillsSection, ContactSection, SocialBar }
}
</script>

<style scoped lang="scss">

</style>
