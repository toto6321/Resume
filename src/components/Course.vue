<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <div v-for="(e, i) in data" :key="i"
                 class="course d-flex">
                <div>{{e.name}}</div>
                <div><a :href="e.link">{{e.project.name}}</a></div>
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

<style scoped lang="sass">
    .course
        div:nth-child(1)
            flex: 1 1 25%

        div:nth-child(2)
            flex: 1 1 75%
</style>