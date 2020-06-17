<template>
    <v-card>
        <v-card-title>{{career}}</v-card-title>
        <v-card-text>
            <ul>
                <li v-for="(e, i) in data.about" :key="i">
                    <div>{{e}}</div>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Introduction",
        props: ['data'],
        computed: {
            career: function () {
                const prefix = 'CAREER FOCUS'
                return (prefix + ': ' + this.data.career).toUpperCase()
            }
        }
    }
</script>

<style scoped>

</style>