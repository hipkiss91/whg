<template>
    <label :for="id" class="input-checkbox">
        <input
            :id="id"
            type="checkbox"
            :checked="modelValue"
            :disabled="disabled"
            @change="update($event.target.checked)"
        >
        <span
            v-if="label"
            class="label"
        >
            {{ label }}
        </span>
    </label>
</template>

<script setup lang="ts">
const { disabled } = defineProps<{
    id: string,
    label?: string,
    disabled?: boolean,
    modelValue: boolean,
}>();

const emits = defineEmits<{
    'update:modelValue': [ value: boolean ],
}>();

function update(value) {
    if (!disabled) {
        emits('update:modelValue', value);
    }
}
</script>

<style lang="scss" scoped>

</style>
