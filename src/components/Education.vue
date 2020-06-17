<template>
    <v-card class="mb-1">
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <div class="d-flex flex-column flex-sm-row">
                <div v-for="(e, i) in data" :key="i"
                     class="education d-flex">
                    <div class="school-logo d-flex justify-center align-center">
                        <a :href="e.school.link" class="d-flex">
                            <img
                                width="72px"
                                height="72px"
                                :src="e.school.icon"
                                :alt="e.school.name"
                            />
                        </a>
                    </div>
                    <div class="description">
                        <div class="ml-2"><h3>{{e.school.name}}</h3></div>
                        <div class="ml-2"><h4>{{e.degree}}</h4></div>
                    </div>

                </div>
            </div>
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
        margin: 0 4px

        .school-logo
            flex: 0 0 25%
            width: 108px
            /*height: 108px*/
            /*padding: 8px*/
            overflow: hidden

        .description
            flex: 1 1 50%

        ul
            li
                margin-bottom: 4px
</style>