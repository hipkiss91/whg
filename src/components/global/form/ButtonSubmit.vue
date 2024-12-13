<template>
    <button :id="buttonId" :class="className" @click.prevent="emits('submit')">
        {{ label }}
    </button>
</template>
<script lang="ts" setup>
const { className = 'primary', label = 'close' } = defineProps<{
    className?: string
    label?: string
    buttonId?: string
}>();

const emits = defineEmits<{
    submit: []
}>();
</script>
<style lang="scss" scoped>
button {
    width: 100%;
    border-radius: 10px;
    height: 50px;

    &.primary {
        background-color: var(--color-success);
        color: var(--color-white);

        &.delete {
            background-color: var(--color-error);
        }
    }

    &.secondary {
        background-color: var(--color-white);
        color: var(--color-text-grey);
    }

    &.tertiary {
        border: 1px solid var(--color-success);
        color: var(--color-text-grey);
    }
}
</style>
