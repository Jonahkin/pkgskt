<template>
    <div
        class="absolute bg-color2 flex h-full w-screen z-30 top-0 bg-opacity-35"
    >
        <div class="loader flex m-auto z-50"></div>
    </div>
</template>

<script>
export default {
    name: "LoaderDiv",
};
</script>

<style scoped>
.loader {
    width: 7rem;
    aspect-ratio: 1;
    color: #243642;
    --_c: no-repeat radial-gradient(farthest-side, currentColor 92%, #0000);
    background: var(--_c) 50% 0 /12px 12px, var(--_c) 50% 100%/12px 12px,
        var(--_c) 100% 50%/12px 12px, var(--_c) 0 50%/12px 12px,
        var(--_c) 50% 50%/12px 12px,
        conic-gradient(from 90deg at 4px 4px, #0000 90deg, currentColor 0) -4px -4px /
            calc(50% + 2px) calc(50% + 2px);
    animation: l8 1s infinite linear;
}

@keyframes l8 {
    to {
        transform: rotate(0.5turn);
    }
}
</style>
