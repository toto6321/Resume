<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <v-container>
                <div v-for="(e, i) in data" :key="i"
                     class="work flex-column">
                    <div class="d-flex">
                        <div class="year text-center">{{parse_date_string(e.start_time).year}}</div>
                        <div class="month text-center">{{parse_date_string(e.start_time).month}}</div>
                        <div class="detail d-flex justify-space-between">
                            <div class="">{{e.position}}</div>
                            <div class="">{{e.employer.city}}</div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="year text-center">{{parse_date_string(e.end_time).year}}</div>
                        <div class="month text-center">{{parse_date_string(e.start_time).month}}</div>
                        <div class="detail d-flex justify-start">
                            <a :href="e.employer.link">{{e.employer.name}}</a>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="year dash"></div>
                        <div class="month"></div>
                        <div class="detail d-flex justify-start">
                            <ul class="">
                                <li v-for="(f, j) in e.achievement" :key="j">
                                    {{f}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Work",
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
    .work
        margin-bottom: 4px


        .year
            flex: 0 0 50px
            border-right: black 1px solid


        .month
            flex: 0 0 30px


        .dash
            border-right: black 1px dashed


        .detail
            flex: 1 1 100%
            padding-left: 2%
            padding-right: 2%


        ul
            li
                margin-bottom: 4px

</style>