<template>
    <section
        class="flex flex-col justify-center w-full items-center px-6 how-background"
    >
        <section
            class="flex flex-col space-y-4 py-6 px-4 justify-center items-center text-color1 z-10"
        >
            <p class="text-3xl font-bold">How it works</p>
            <ul class="list-none px-4 py-6">
                <li class="list-item flex-col items-center">
                    <span>1. Enter your tracking ID.</span>
                    <img
                        src="../assets/static/search.png"
                        alt="Search icon"
                        class="w-[10rem] mx-auto mb-5"
                    />
                </li>
                <li class="list-item flex-col items-center">
                    <span>2. See the real-time status of your shipment.</span>
                    <img
                        src="../assets/static/clock.svg"
                        alt="Clock icon"
                        class="w-[10rem] mx-auto mb-5"
                    />
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
export default {
    name: "HowItWorks",
};
</script>
