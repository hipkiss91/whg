<template>
    <VDatePicker v-model="newDate" :attributes="attrs" is-dark @dayclick="emits('selectDate')">
        <template #default="{ togglePopover }">
            <button
                type="submit"
                @click.prevent="togglePopover"
            >
                {{ DateTime.fromJSDate(new Date(date)).toFormat('D/MM/YY') }}
            </button>
        </template>
    </VDatePicker>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon';
import { DatePicker as VDatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const props = defineProps<{
    date: string | null,
}>();

const emits = defineEmits<{
    selectDate: [ value: string ],
}>();

const newDate = ref(props.date);
const attrs = ref([{
    key: 'today',
    dot: 'purple',
    dates: new Date(),
}]);
</script>

<style lang="scss">
.vc-container,
.vc-popover-caret {
    background: var(--color-grey);
}
</style>