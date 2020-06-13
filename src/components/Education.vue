<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <v-container class="d-flex flex-column flex-sm-row">
                <v-card v-for="(e, i) in data" :key="i"
                        class="education d-flex">
                    <div class="school-logo d-flex justify-center align-center">
                        <a :href="e.school.link">
                            <img
                                width="72px"
                                height="72px"
                                :src="e.school.icon"
                            />
                        </a>
                    </div>
                    <div class="description">
                        <v-card-title>{{e.level}}</v-card-title>
                        <v-card-subtitle class="ml-2">{{e.degree}}</v-card-subtitle>
                    </div>

                </v-card>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Education",
        props: ['data', 'title'],
        methods: {
            parse_date_string: (d) => {
                const [year, month, day] = d.split('-')
                return {
                    year,
                    month,
                    day
                }
            }
        }

    }
</script>

<style scoped lang="sass">
    .education
        flex: 1 1 50%

        .school-logo
            flex: 0 0 25%
            width: 108px
            /*height: 108px*/
            /*padding: 8px*/
            overflow: hidden

        .description
            flex: 1 1 75%

        ul
            li
                margin-bottom: 4px
</style>