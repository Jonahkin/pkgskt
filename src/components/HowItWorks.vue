<template>
    <section
        class="flex flex-col space-y-4 py-6 px-4 justify-center items-center text-color1 z-10"
    >
        <p class="text-3xl font-bold">How it works</p>
        <ul class="list-none px-4 py-6">
            <li class="list-item">1. Enter your tracking ID.</li>
            <img
                src="../assets/static/search.png"
                alt=""
                class="w-[10rem] mx-auto mb-5"
            />
            <li class="list-item">
                2. See the real-time status of your shipment.
            </li>
            <img
                src="../assets/static/clock.svg"
                alt=""
                class="w-[10rem] mx-auto mb-5"
            />
        </ul>
    </section>
</template>

<script>
export default {
    name: "HowItWorks",
};
</script>
