<template>
    <section class="flex flex-col px-4 pt-14 pb-6">
        <section
            class="flex flex-col space-y-8 justify-center items-center text-color1 z-10"
        >
            <p class="text-5xl font-extrabold text-center">
                Track Your Packages Anytime, Anywhere.
            </p>
            <p class="font-medium text-lg text-center px-6 text-wrap">
                Get real-time updates on your shipment status, from dispatch to
                delivery. All you need is your tracking ID.
            </p>
            <router-link
                class="rounded-lg px-4 py-2 outline-none border-none bg-color1 text-color4 hover:bg-opacity-85"
                :to="{ name: 'track' }"
            >
                Track Now
            </router-link>
        </section>
    </section>
</template>

<script>
export default {
    name: "HeroSection",
    setup() {
        const backgroundStyle = () => {
            return {
                // backgroundImage: `url(${require("@/assets/static/delivery.png")})`,
                // Or use import (requires a top-level import)
                backgroundImage: `url(${import(
                    "@/assets/static/delivery.png"
                )})`,
            };
        };

        return {
            backgroundStyle,
        };
    },
};
</script>
