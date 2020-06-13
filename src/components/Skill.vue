<template>
    <div class="skill d-flex flex-column mt-2">
        <h2 class="text-capitalize"># {{title}}</h2>
        <div class="programming-wrapper wrapper">
            <h3 class="text-capitalize">## {{Object.keys(data)[0]}}</h3>
            <div class="d-flex flex-column programming-wrapper">
                <div v-for="(category, i) in data.programming" :key="i"
                     class="programming-item"
                >
                    <div class="d-flex category-item">
                        <div class="programming-item-left d-flex align-center">
                            {{category[0].category}}
                        </div>
                        <div class="flex-row programming-item-right">
                            <div v-for="(lang, i) in category" :key="i"
                                 class="d-flex programming-item"
                            >
                                <div class="progress-label">{{lang.language}}</div>
                                <v-progress-linear :value="lang.proficiency" class="progress"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="os-wrapper wrapper">
            <h3 class="text-capitalize">## {{Object.keys(data)[1]}}</h3>
            <div>
                <ul class="ml-2">
                    <li v-for="(e, i) in data.os" :key="i">
                        <p>{{stringify(e)}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="software-wrapper wrapper">
            <h3 class="text-capitalize">## {{Object.keys(data)[2]}}</h3>
            <div>
                <ul class="ml-2">
                    <li v-for="(e, i) in data.software" :key="i">
                        <p>{{stringify(e)}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Skill",
        props: ['data', 'title'],
        data: function () {
            return {}
        },
        methods: {
            stringify: (item) => Array.isArray(item) ? item.join(', ') : item.toString()
        }

    }
</script>

<style scoped lang="sass">
    *
        line-height: 1


        .skill
            padding-left: 8px
            padding-right: 8px


        .wrapper
            padding-left: 8px


        .programming-wrapper

            .programming-item
                align-items: center
                margin: 4px 0

                .programming-item-left
                    flex: 0 0 25%
                    max-width: 33%
                    min-width: 70px
                    margin-rigth: 8px


                .programming-item-right
                    flex: 1 1 75%
                    max-width: 75%

                    .progress-label
                        flex: 0 0 40%
                        max-width: 50%
                        min-width: 80px


                    .progress
                        flex: 0 0 60%
                        min-width: 50%
                        color: blue


        h2, h3
            margin: 8px 0


        li
            margin-bottom: 4px


        p
            margin-bottom: 4px


</style>