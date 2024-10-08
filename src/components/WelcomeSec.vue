<template>
    <section
        class="flex flex-col justify-center items-center px-4 pt-14 pb-6 welcome-background"
    >
        <section
            class="flex flex-col space-y-8 justify-center items-center text-color1 z-10"
        >
            <p class="text-5xl font-extrabold text-center">
                Welcome to Occult Courier
            </p>
            <p class="font-medium text-lg text-center px-6 text-wrap">
                The ultimate delivery solution for both business and everyday
                life.
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
    name: "WelcomeSec",
};
</script>
