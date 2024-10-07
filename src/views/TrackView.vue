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
            class="flex flex-col justify-start items-center space-y-4 delivery-background pb-6 flex-grow"
        >
            <TrackingInput></TrackingInput>
            <ProductCard v-if="currentPackage.length > 0"></ProductCard>
        </div>
        <FooterSec class="mx-auto w-full"></FooterSec>
    </div>
    <LoaderDiv v-if="loadingStatus"></LoaderDiv>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
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

        const loadingStatus = computed(() => store.getters.GET_LOADING_STATUS);
        const currentPackage = computed(
            () => store.getters.GET_CURRENT_PACKAGE
        );

        onMounted(() => {
            store.commit("SET_CURRENT_PACKAGE", []);
        });

        return {
            loadingStatus,
            currentPackage,
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
</style>
