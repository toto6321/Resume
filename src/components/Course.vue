<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <div v-for="(e, i) in data" :key="i">
                <v-row>
                    <v-col cols="2">{{e.name}}</v-col>
                    <v-col cols="10"><a :href="e.link">{{e.project.name}}</a></v-col>
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