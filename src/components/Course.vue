<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <div v-for="(e, i) in data" :key="i">
                <v-row class="px-2">
                    <v-col cols="3" class="py-1">{{e.name}}</v-col>
                    <v-col cols="9" class="py-1"><a :href="e.link">{{e.project.name}}</a></v-col>
                </v-row>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Course",
        props: ['data', 'title']
    }
</script>

<style scoped>

</style>