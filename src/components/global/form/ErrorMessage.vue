<template>
    <p class="errorMsg">
        <IconInfo class="icon"/>
        {{ errorLabel }}
    </p>
</template>
<script lang="ts" setup>
import IconInfo from '~/assets/modules/global/info.svg';

defineProps<{
    errorLabel?: string
}>();
</script>
<style lang="scss" scoped>
.errorMsg {
    color: var(--color-error);
    font-size: 12px;
    width: 100%;
    margin-top: 4px;
    display: flex;

    .icon {
        width: 16px;
        height: 16px;
        margin-right: 4px;

        :deep(path) {
            fill: var(--color-error);
        }
    }
}
</style>
