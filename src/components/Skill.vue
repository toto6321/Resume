<template>
    <div class="skill d-flex flex-column mt-2">
        <h2># Skill</h2>
        <div class="skill-wrapper wrapper">
            <h3>## Programming</h3>
            <div class="d-flex flex-column programming-wrapper">
                <div v-for="(category, i) in data.programming" :key="i"
                     class=""
                >
                    <div class="d-flex category-item">
                        <div class="d-flex align-center skill-left">
                            {{category[0].category}}
                        </div>
                        <div class="flex-row programming-item-right">
                            <div v-for="(lang, i) in category" :key="i"
                                 class="d-flex programming-item">
                                <label class="slider-label">{{lang.language}}</label>
                                <input type="range" :value="lang.proficiency" max="10"
                                       class="slider"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="os-wrapper wrapper">
            <h3>## OS</h3>
            <div>
                <ul class="ml-2">
                    <li v-for="(e, i) in data.os" :key="i">
                        <p>{{stringify(e)}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="software-wrapper wrapper">
            <h3>## Software</h3>
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
        props: {
            data: {
                type: Object,
                default: function () {
                    return {
                        "programming":
                            [
                                [
                                    {
                                        "language": "Java",
                                        "icon": "mdi-java",
                                        "category": "backend",
                                        "proficiency": 6
                                    }
                                ],
                                [
                                    {
                                        "language": "Vue.js",
                                        "icon": "mdi-vue",
                                        "category": "frontend",
                                        "proficiency": 8
                                    },
                                    {
                                        "language": "React.js",
                                        "icon": "mdi-react",
                                        "category": "frontend",
                                        "proficiency": 7
                                    }
                                ]
                            ],
                        "os": [
                            [
                                "Ubuntu",
                                "Kali"
                            ],
                            [
                                "ROS"
                            ],
                            [
                                "Windows 10",
                                "Windows 7"
                            ],
                            [
                                "Mac OS"
                            ]
                        ],
                    }
                }
            }
        },
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
                    margin: 4px 0

                    .programming-item-left
                        flex: 0 0 30%
                        max-width: 30%


                    .programming-item-right
                        flex: 0 0 60%
                        max-width: 70%

                        .slider-label
                            max-width: 50%


                        .slider
                            max-width: 50%
                            color: blue

        h2, h3
            margin: 8px 0


        li
            margin-bottom: 4px


        p
            margin-bottom: 4px


</style>