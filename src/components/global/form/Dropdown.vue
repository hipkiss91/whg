<template>
    <div v-click-outside="toggleDropdown" class="relative">
        <div
            class="cursor-pointer inline-flex items-center border-2 border-transparent overflow-hidden text-ellipsis"
            @click.prevent="toggleDropdown"
        >
            {{ activeOption.text }}
        </div>

        <ul
            v-if="open"
            class="py-2 max-h-60 overflow-y-auto overflow-x-hidden flex flex-col absolute z-40 shadow-2xl rounded-xl overflow-hidden"
        >
            <li
                v-for="(option, index) in options"
                :key="index"
                class="block w-full px-5 py-2 hover:bg-slate-900 text-gray-400 hover:text-white transition-all duration-100 text-sm cursor-pointer whitespace-nowrap"
                @click.prevent="handleSelectOption(option)"
            >
                <div class="flex items-center">
                    {{ option.text }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps<{
    options: {
        type: Array,
        default: null,
    },
    activeOption: {
        type: Object,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
}>();

const emits = defineEmits<{
    select : [ value: string ],
}>();

const open = ref(false);
const selected = ref(null);

function toggleDropdown() {
    open.value = !open.value;
}

function handleSelectOption(option) {
    selected.value = option;
    emits('select', option);
    toggleDropdown();
}
</script>