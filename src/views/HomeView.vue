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
        <!-- Main scrollable container with scroll snapping behavior and hidden scrollbar -->
        <div
            class="scroll-container h-screen snap-y snap-mandatory overflow-y-scroll no-scrollbar"
        >
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <WelcomeSec></WelcomeSec>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <PersepSec></PersepSec>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <WithoutBorders></WithoutBorders>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <WorldwideEcommerce></WorldwideEcommerce>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <ForYou></ForYou>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <FriendlyService></FriendlyService>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <HeroSection></HeroSection>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <HowItWorks></HowItWorks>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <UsersReview></UsersReview>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <CallToAction></CallToAction>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <FooterSec></FooterSec>
            </section>
        </div>
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
import WelcomeSec from "@/components/WelcomeSec.vue";
import PersepSec from "@/components/PersepSec.vue";
import WithoutBorders from "@/components/WithoutBorders.vue";
import WorldwideEcommerce from "@/components/WorldwideEcommerce.vue";
import ForYou from "@/components/ForYou.vue";
import FriendlyService from "@/components/FriendlyService.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        NavBar,
        HeroSection,
        HowItWorks,
        UsersReview,
        CallToAction,
        FooterSec,
        WelcomeSec,
        PersepSec,
        WithoutBorders,
        WorldwideEcommerce,
        ForYou,
        FriendlyService,
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

.scroll-container {
    @apply snap-y snap-mandatory overflow-y-scroll;
    /* Enables vertical scroll snapping */
}

/* Hide the scrollbar for all browsers */
.no-scrollbar {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Edge, and Opera */
}
</style>
