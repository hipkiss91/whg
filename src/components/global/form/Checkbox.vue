<template>
    <label :for="id" class="input-checkbox">
        <input
            :id="id"
            type="checkbox"
            :checked="modelValue"
            :disabled="isDisabled"
            @change="update($event.target.checked)"
        >
        <div
            class="overflow-hidden bg-gray-600 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:left-[2px]"
        />
        <span
            v-if="label"
            class="label"
        >
            {{ label }}
        </span>
    </label>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string,
    label?: string,
    isDisabled: boolean,
    modelValue: boolean,
}>();

const emits = defineEmits<{
    'update:modelValue': [ value: boolean ],
}>();

function update(value) {
    if (!props.isDisabled) {
        emits('update:modelValue', value);
    }
}
</script>

<style lang="scss" scoped>

</style>
