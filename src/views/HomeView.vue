<template>
    <div
        class="max-w-2xl mx-auto"
        style="
            background: linear-gradient(
                    135deg,
                    rgba(36, 54, 66),
                    rgba(62, 92, 107),
                    rgba(26, 43, 52)
                )
                no-repeat;
            height: fit-content;
        "
    >
        <NavBar></NavBar>
        <div
            class="flex flex-col justify-start items-center space-y-4 delivery-background pb-6"
        >
            <HeroSection></HeroSection>
            <HowItWorks></HowItWorks>
            <UsersReview></UsersReview>
            <CallToAction></CallToAction>
        </div>
        <FooterSec></FooterSec>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import UsersReview from "@/components/UsersReview.vue";
import CallToAction from "@/components/CallToAction.vue";
import FooterSec from "@/components/FooterSec.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        NavBar,
        HeroSection,
        HowItWorks,
        UsersReview,
        CallToAction,
        FooterSec,
    },
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
