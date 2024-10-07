<template>
    <nav
        class="flex-no-wrap relative flex w-full items-center justify-between bg-transparent py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4"
    >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <router-link
                class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                to="/"
            >
                <!-- <img
                    src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                    alt="TE Logo"
                    loading="lazy"
                    class="w-6"
                /> -->
                <p class="text-lg font-black text-color1">PackageScout</p>
            </router-link>
            <!-- <p class="py-1 px-2 text-color1 rounded-md cursor-pointer">Track</p> -->
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
