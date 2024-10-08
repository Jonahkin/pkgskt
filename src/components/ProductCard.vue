<template>
    <section
        class="flex flex-col justify-start w-full items-center px-6 product-background"
    >
        <section class="z-10 text-color1 w-full pt-8 pb-6 px-4">
            <div
                class="flex flex-col space-y-6 mx-auto w-full max-w-sm justify-start items-center rounded-md shadow-lg bg-color3 hover:bg-opacity-85"
            >
                <img :src="currentPackage.image" alt="" class="w-full" />
                <p class="text-lg font-bold pl-4">
                    {{ currentPackage.productName }}
                </p>
                <div
                    class="flex flex-col space-y-6 justify-start items-start w-full pl-4"
                >
                    <div
                        class="flex flex-col space-y-4"
                        v-for="(p, i) in currentPackage.status"
                        :key="i"
                    >
                        <p class="flex space-x-4">
                            <img class="w-6" src="../assets/static/point.png" />
                            <span class="font-bold">{{ p.step }}</span>
                        </p>
                        <p class="font-medium pl-8">
                            {{ p.date }} {{ p.time }}
                        </p>
                    </div>
                </div>
                <p
                    class="flex justify-center items-center space-x-4 w-full mx-auto pt-4"
                >
                    <img
                        src="../assets/static/location.png"
                        alt=""
                        class="w-7"
                    /><span class="font-bold">{{
                        currentPackage.currentLocation
                    }}</span>
                </p>
                <small class="p-2">{{ currentPackage.trackingID }}</small>
            </div>
        </section>
    </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    name: "ProductCard",
    setup() {
        const store = useStore();

        const currentPackage = computed(
            () => store.getters.GET_CURRENT_PACKAGE
        );

        return {
            currentPackage: currentPackage.value[0],
        };
    },
};
</script>
