<template>
    <div v-click-outside="toggleDropdown" class="relative">
        <div
            @click.prevent="toggleDropdown"
        >
            {{ activeOption }}
        </div>

        <ul
            v-if="open"
        >
            <li
                v-for="(option, index) in options"
                :key="index"
                @click.prevent="handleSelectOption(option)"
            >
                <div class="flex items-center">
                    {{ option }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import vClickOutside from 'click-outside-vue3';

defineProps<{
    options: string[],
    activeOption: string,
    disabled?: boolean,
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