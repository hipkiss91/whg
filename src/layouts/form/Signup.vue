<template>
    <div class="signup-form">
        <VForm
            v-slot="{ errors, meta, }"
            ref="RegisterForm"
            :validation-schema="formValidationSchema"
            :initial-values="formData"
            @submit="handleSubmit"
        >
            <InputText
                id="name"
                v-model.trim="formData.name"
                class="spacing"
                label="Name"
                :is-error="!!errors.name && meta.dirty"
                :error-label="errors.name || 'Please provide a name'"
                placeholder="John"
            />
            <InputEmail
                id="email"
                v-model.trim="formData.email"
                class="spacing"
                label="Email"
                :is-error="!!errors.email && meta.dirty"
                :error-label="errors.email || 'Please provide an email'"
                placeholder="john@test.com"
            />
            <InputPassword
                id="password"
                v-model.trim="formData.password"
                class="spacing"
                label="Password"
                :is-error="!!errors.terms && meta.dirty"
                :error-label="errors.terms || 'Please provide a password'"
            />
            <InputPassword
                id="confirmPassword"
                v-model.trim="formData.confirmPassword"
                class="spacing"
                label="Confirm Password"
                :is-error="!!errors.terms && meta.dirty"
                :error-label="errors.terms || 'Please confirm your password'"
            />
            <DatePicker
                id="dateOfBirth"
                :date="formData.dateOfBirth"
                class="spacing"
                label="Date Of Birth"
                placeholder="16th June 1993"
            />
            <Dropdown
                id="service"
                label="Select Service Type"
                class="spacing"
                :options="dropdownServiceOptions"
                :active-option="formData.service"
                :is-error="!!errors.terms && meta.dirty"
                :error-label="errors.terms || 'Please provide a service type'"
                placeholder="Web Development"
            />
            <InputText
                v-if="formData.service === 'other'"
                id="serviceInput"
                v-model.trim="formData.serviceInput"
                class="spacing"
                label="Service"
                :is-error="!!errors.terms && meta.dirty"
                :error-label="errors.terms || 'Please provide a service type'"
                placeholder="Other (Please Specify)"
            />
            <Checkbox
                id="terms"
                v-model.trim="formData.terms"
                class="spacing"
                label="Terms And Conditions (Required)"
                :is-error="!!errors.terms && meta.dirty"
                :error-label="errors.terms || 'Please agree to our terms and conditions'"
            />
            <ButtonSubmit
                button-id="register"
                label="Register"
                class="spacing-top"
                @submit="handleSubmit"
            />
        </VForm>
    </div>
</template>

<script setup lang="ts">
import { Form as VForm } from 'vee-validate';
import { object, string, date, boolean } from 'yup';

import { createId } from '~/utils/createId';
import type { RegisterForm } from '~/types/Forms';

const formData = ref<RegisterForm>({
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
const dropdownServiceOptions = [
    'Web Development',
    'Mobile Development',
    'SEO Services',
    'Other (Please Specify)'
];

const formValidationSchema = computed(() => object({
    name: string().required(),
    email: string().email(),
    password: string().required().min(8, 'Must be at least 8 characters').test('includesNumber', 'Password must contain at least one number', (value) => /\d/.test(value)),
    confirmPassword: string().required()
    // .oneOf([ref('password')], "Passwords don't match.")
    ,
    service: string().required(),
    serviceInput: string(),
    terms: boolean().required(),
    dateOfBirth: date().default(() => new Date()),
}));

console.log(formValidationSchema.value);

function resetValidation() {
    error.value = false;
}

function validate() {
    resetValidation();

    return error.value;
}

function handleSubmit() {
    console.log('hello???');
    if (!validate()) {
        // Submit to API.
    }
}
</script>

<style lang="scss" scoped>
.spacing {
    margin-bottom: 16px;
}
.spacing-top {
    margin-top: 16px;
}
</style>