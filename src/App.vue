<template>
    <transition name="fade" mode="default">
        <router-view />
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    @apply transition-opacity duration-[1000ms];
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}
</style>
