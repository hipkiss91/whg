<template>
    <div class="textInputContainer">
        <p v-if="label" class="label" :for="id">
            {{ label }}
        </p>
        <div class="row">
            <div class="input" :class="{ error: isError && errorBorder }">
                <input
                    :id="id"
                    :value="modelValue"
                    type="text"
                    :placeholder="placeholder"
                    @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
                >
            </div>
            <p v-if="isError" class="errorMsg">
                <IconInfo class="icon"/>
                {{ errorLabel }}
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import IconInfo from '~/assets/modules/global/info.svg';

defineProps<{
    id?: string
    label?: string
    isError?: boolean
    errorBorder?: boolean
    errorLabel?: string
    placeholder?: string
    modelValue: string
}>();

const emits = defineEmits<{
    'update:modelValue': [ value: string ]
}>();
</script>
<style lang="scss" scoped>
.textInputContainer {
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    flex: auto;
    flex-direction: column;

    .row {
        width: 100%;

        .input {
            position: relative;
            border: 1px solid var(--color-grey);
            border-radius: 5px;
            padding-left: 8px;
            background-color: var(--color-white);
            display: flex;
            width: 100%;

            &.error {
                border-color: var(--color-error);
            }

            input {
                width: 100%;
                font-weight: 400;
                font-family: 'openSans';
                font-size: 12px;
                line-height: 38px;
                padding: 0;
                height: 38px;
            }
        }
    }

    .label {
        text-align: left;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: bold;
    }

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
                fill: var(--color-error) !important;
            }
        }
    }
}
</style>
