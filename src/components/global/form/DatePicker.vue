<template>
    <VDatePicker v-model="newDate" :attributes="attrs" is-dark @dayclick="emits('selectDate')">
        <template #default="{ togglePopover }">
            <button
                type="submit"
                @click.prevent="togglePopover"
            >
                <span class="block text-xs md:text-sm md:hidden">{{ $dayjs(date).format('D/MM/YY') }}</span>
                <span class="hidden text-xs md:text-sm md:block">{{ $dayjs(date).format('D MMM YYYY') }}</span>
            </button>
        </template>
    </VDatePicker>
</template>

<script setup>
import { DatePicker as VDatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const props = defineProps<{
    date: {
        type: string,
        default: null,
    },
    mode: {
        validator(value) {
            return ['date', 'time', 'dateTime',].includes(value);
        },
        default: null,
    },
}>();

const emits = defineEmits<{
    selectDate: [ value: string ],
}>();

const newDate = ref(props.date);
const attrs = ref([{
    key: 'today',
    dot: 'purple',
    dates: new Date(),
},]);
</script>

<style lang="scss">
.vc-container,
.vc-popover-caret {
    background: var(--color-grey);
}
</style>