<template>
    <div
        class="max-w-2xl mx-auto flex flex-col min-h-screen relative"
        style="
            background: linear-gradient(
                    135deg,
                    rgba(36, 54, 66),
                    rgba(62, 92, 107),
                    rgba(26, 43, 52)
                )
                no-repeat;
        "
    >
        <NavBar></NavBar>
        <div
            class="scroll-container h-screen snap-y snap-mandatory overflow-y-scroll no-scrollbar"
        >
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <TrackingInput
                    @validResponse="scrollToProductCard"
                ></TrackingInput>
            </section>
            <section
                class="w-full h-screen flex items-center justify-start pt-6 snap-start"
                v-if="currentPackage.length > 0"
                ref="productCardSection"
            >
                <ProductCard v-if="currentPackage.length > 0"></ProductCard>
            </section>
            <section
                class="w-full h-screen flex items-center justify-center snap-start"
            >
                <FooterSec class="mx-auto w-full z-10"></FooterSec>
            </section>
        </div>
    </div>
    <LoaderDiv v-if="loadingStatus"></LoaderDiv>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, nextTick, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterSec from "@/components/FooterSec.vue";
import TrackingInput from "@/components/TrackingInput.vue";
import ProductCard from "@/components/ProductCard.vue";
import LoaderDiv from "@/components/LoaderDiv.vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "TrackView",
    components: {
        NavBar,
        FooterSec,
        TrackingInput,
        ProductCard,
        LoaderDiv,
    },
    setup() {
        const store = useStore();
        const productCardSection = ref<HTMLElement | null>(null);

        const loadingStatus = computed(() => store.getters.GET_LOADING_STATUS);
        const currentPackage = computed(
            () => store.getters.GET_CURRENT_PACKAGE
        );

        onMounted(() => {
            store.commit("SET_CURRENT_PACKAGE", []);
        });

        // Function to scroll to the ProductCard section
        const scrollToProductCard = () => {
            nextTick(() => {
                if (productCardSection.value) {
                    productCardSection.value.scrollIntoView({
                        behavior: "smooth", // Smooth scroll behavior
                        block: "start", // Align to the top of the viewport
                    });
                }
            });
        };

        return {
            loadingStatus,
            currentPackage,
            productCardSection,
            scrollToProductCard,
        };
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
