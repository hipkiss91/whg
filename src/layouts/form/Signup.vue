<template>
    <div class="signup-form">
        <TextInput
            id="name"
            v-model.trim="item.name"
            label="Name"
            error-label="Please provide a name"
            :is-error="errors.name"
            placeholder="John"
        />
        <InputEmail
            id="BankrollNameInput"
            v-model.trim="item.email"
            label="Email"
            error-label="Please provide an email"
            :is-error="errors.name"
            placeholder="john@test.com"
        />
        <InputPassword
            id="BankrollNameInput"
            v-model.trim="item.password"
            label="Password"
            error-label="Please provide a password"
            :is-error="errors.name"
        />
        <InputPassword
            id="BankrollNameInput"
            v-model.trim="item.confirmPassword"
            label="Confirm Password"
            error-label="Please confirm your password"
            :is-error="errors.name"
        />
        <DatePicker
            id="BankrollNameInput"
            v-model.trim="item.dateOfBirth"
            label="Date Of Birth"
            error-label="Please provide a date of birth"
            :is-error="errors.name"
            placeholder="16th June 1993"
        />
        <Dropdown
            id="BankrollNameInput"
            v-model="item.service"
            label="Select Service Type"
            :options="dropdownServiceOptions"
            :active-option="item.service"
            error-label="Please provide a service type"
            :is-error="errors.name"
            placeholder="Web Development"
        />
        <TextInput
            v-if="item.service === 'other'"
            id="name"
            v-model.trim="item.serviceInput"
            label="Service"
            error-label="Please provide a service type"
            :is-error="errors.name"
            placeholder="Other (Please Specify)"
        />
        <Checkbox
            id="BankrollNameInput"
            v-model.trim="item.terms"
            label="Terms And Conditions (Required)"
            error-label="Please agree to our terms and conditions"
            :is-error="errors.name"
        />
        <ButtonSubmit
            button-id="register"
            label="Register"
            @submit="handleBack"
        />
    </div>
</template>

<script setup lang="ts">
import { object, string } from 'yup';

import type { RegisterForm } from '~/types/Forms';

const item = ref<RegisterForm>({
    id: createId(),
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    service: '',
    serviceInput: null,
    terms: false,
    dateOfBirth: null,
});
const error = ref(false);
const errors = ref({
    name: false,
    value: false,
});
const dropdownServiceOptions = ref([
    'Web Development',
    'Mobile Development',
    'SEO Services',
    'Other (Please Specify)'
]);
const formValidationSchema = object({
    name: string().required(),
    email: string().email(),
    password: string().required().min(8, 'Must be at least 8 characters').test('includesNumber', 'Password must contain at least one number', (value) => /\d/.test(value)),
    confirmPassword: string().required().oneOf([yup.ref('password'), null], "Passwords don't match."),
    service: string().required(),
    serviceInput: string().required(),
    terms: string().required().boolean(),
    dateOfBirth: date().default(() => new Date()),
});

function resetValidation() {
    error.value = false;
}

function validate() {
    resetValidation();

    return error.value;
}

function submit() {
    if (!validate()) {
        // Submit to API.
    }
}
</script>

<style lang="scss" scoped>

</style>