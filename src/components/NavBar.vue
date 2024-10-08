<template>
    <nav
        class="flex-no-wrap relative flex flex-col w-full items-center justify-between bg-transparent py-2 shadow-dark-mild lg:flex-row lg:justify-between lg:py-4"
    >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <router-link
                class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                to="/"
            >
                <img src="../assets/static/logo.png" alt="" class="w-10" />
            </router-link>
            <button
                class="block border-0 bg-transparent px-2 text-color1 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="[&>svg]:w-7 [&>svg]:stroke-color1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>
            </button>
        </div>
        <div
            class="!visible hidden flex-grow basis-[100%] items-center transition-all duration-500 lg:flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item
        >
            <ul
                class="list-style-none me-auto flex flex-col ps-0 lg:flex-row lg:items-center"
                data-twe-navbar-nav-ref
            >
                <li
                    class="mb-4 flex flex-col space-y-2 lg:mb-0 lg:pe-2"
                    data-twe-nav-item-ref
                >
                    <router-link
                        class="text-color1 transition duration-200 font-medium hover:text-opacity-90 hover:ease-in-out focus:text-color1 active:text-color1 motion-reduce:transition-none lg:px-2"
                        to="/"
                        >Shopping
                    </router-link>
                    <router-link
                        class="text-color1 transition duration-200 font-medium hover:text-opacity-90 hover:ease-in-out focus:text-color1 active:text-color1 motion-reduce:transition-none lg:px-2"
                        to="/"
                        >Who we are
                    </router-link>
                    <router-link
                        class="text-color1 transition duration-200 font-medium hover:text-opacity-90 hover:ease-in-out focus:text-color1 active:text-color1 motion-reduce:transition-none lg:px-2"
                        to="/"
                        >Career
                    </router-link>
                    <router-link
                        class="text-color1 transition duration-200 font-medium hover:text-opacity-90 hover:ease-in-out focus:text-color1 active:text-color1 motion-reduce:transition-none lg:px-2"
                        to="/"
                        >Insights
                    </router-link>
                    <router-link
                        class="text-color1 transition duration-200 font-medium hover:text-opacity-90 hover:ease-in-out focus:text-color1 active:text-color1 motion-reduce:transition-none lg:px-2"
                        to="/"
                        >Contacts
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { Collapse, Dropdown, initTWE } from "tw-elements";
import { onMounted } from "vue";

export default {
    name: "NavBar",
    setup() {
        onMounted(() => {
            initTWE({ Collapse, Dropdown });
        });
    },
};
</script>
