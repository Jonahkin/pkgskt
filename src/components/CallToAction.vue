<template>
    <section
        class="flex flex-col justify-center items-center w-full px-6 cta-background"
    >
        <div
            class="flex flex-col space-y-6 justify-center px-4 py-6 items-center text-color1 z-10"
        >
            <p class="text-3xl font-bold text-center px-4">
                Ready to Track Your Package?
            </p>
            <router-link
                class="rounded-lg px-4 py-2 outline-none border-none bg-color1 text-color4 hover:bg-opacity-85"
                :to="{ name: 'track' }"
            >
                Track Now
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "CallToAction",
};
</script>
