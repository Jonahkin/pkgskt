<template>
    <nav
        class="flex-no-wrap relative flex w-full items-center justify-between bg-transparent py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4"
    >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <router-link
                class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                to="/"
                ><p class="text-lg font-black text-color1">OccultCourier</p>
            </router-link>
        </div>
    </nav>
</template>

<script>
import { Collapse, Dropdown, initTWE } from "tw-elements";

initTWE({ Collapse, Dropdown });
export default {
    name: "NavBar",
};
</script>
