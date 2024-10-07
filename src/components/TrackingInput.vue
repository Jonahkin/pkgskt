<template>
    <div
        class="flex flex-col mx-auto space-y-6 justify-center px-4 py-6 items-center text-color1 z-10"
    >
        <p class="text-3xl font-bold text-center px-4">
            Ready to Track Your Package?
        </p>
        <form
            class="flex flex-col justify-start items-center space-y-4 px-6 w-full"
            @submit.prevent="trackPackage"
        >
            <input
                type="text"
                placeholder="Tracking ID"
                v-model="trackingID"
                class="rounded-lg py-2 px-3 outline-none border-none w-full placeholder-color4 text-color4"
            />
            <button
                type="submit"
                class="uppercase rounded-lg px-4 py-2 outline-none border-none bg-color1 text-color4 hover:bg-opacity-80"
            >
                Track
            </button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: "TrackingInput",
    setup() {
        const store = useStore();
        const trackingID = ref("");

        const trackPackage = () => {
            if (String(trackingID.value).trim() == "") return;
            store.dispatch("getPackages", String(trackingID.value).trim());
        };

        return {
            trackPackage,
            trackingID,
        };
    },
};
</script>
