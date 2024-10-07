<template>
    <div
        class="flex flex-col space-y-4 justify-center px-4 items-center text-color1 z-10"
    >
        <p class="text-3xl font-bold">Why Choose Us?</p>
        <section
            class="flex rounded-lg flex-col justify-start items-start space-y-3 py-4 px-2 bg-color4 max-w-sm w-full"
        >
            <p class="font-bold text-left">Marcus J.</p>
            <p class="font-medium text-left text-sm text-wrap">
                "The best tracking system I’ve ever used!"
            </p>
        </section>
        <section
            class="flex rounded-lg flex-col justify-start items-start space-y-3 py-4 px-2 bg-color4 max-w-sm w-full"
        >
            <p class="font-bold text-left">Sebastian W.</p>
            <p class="font-medium text-left text-sm text-wrap">
                "Super easy to know where my packages are!"
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: "UsersReview",
};
</script>
