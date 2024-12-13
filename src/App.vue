
<template>
    <div id="application">
        <router-view v-slot="{ Component }">
            <template v-if="Component">
                <transition :name="transitionName" mode="out-in">
                    <Suspense timeout="0">
                        <template #default>
                            <component :is="Component"/>
                        </template>
                        <template #fallback>
                            <div class="loading">
                                loading
                            </div>
                        </template>
                    </Suspense>
                </transition>
            </template>
        </router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="2">

</style>
