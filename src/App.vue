
<template>
    <div id="application">
        <router-view v-slot="{ Component }">
            <template v-if="Component">
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
            </template>
        </router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#application {
    padding: 2em;
}
</style>
