<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <ul>
                <li v-for="(e, i) in data" :key="i">
                    <p>{{e.join(', ')}}</p>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Knowledge",
        props: ['data', 'title'],
    }
</script>

<style scoped>

</style>