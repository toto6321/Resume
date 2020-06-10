<template>
    <v-container class="d-flex flex-column skill">
        <h2>Skill</h2>
        <div class="pa-2 skill-table">
            <h3># Programming</h3>
            <div class="d-flex flex-column programming-wrapper">
                <div v-for="(category, i) in data.programming" :key="i">
                    <div class="d-flex programming-item">
                        <div class="d-flex align-center skill-left">
                            {{category[0].category}}
                        </div>
                        <div class="flex-row skill-right">
                            <v-container v-for="(lang, i) in category" :key="i"
                                         class="d-flex px-2">
                                <label class="slider-label">{{lang.language}}</label>
                                <input type="range" :value="lang.proficiency" max="10"
                                       class="slider"/>
                            </v-container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
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
                            ]
                    }
                }
            }
        }

    }
</script>

<style scoped>
    .skill {
        min-width: 290px;
        max-width: 360px;
    }

    .programming-wrapper {
        line-height: 1;
    }

    .programming-item {
        max-width: 100%
    }

    .skill-left {
        flex: 0 0 30%;
        max-width: 30%;
    }

    .skill-right {
        flex: 0 0 70%;
        max-width: 70%;
    }

    .slider-label {
        min-width: 6rem;
        max-width: 50%;
    }

    .slider {
        max-width: 60%;
        color: blue;
    }
</style>