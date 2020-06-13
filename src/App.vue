<template>
    <v-app>
        <v-content>
            <v-row>
                <v-col id="left" class="panel-1" cols="12" xs="12" sm="8">
                    <Introduction :data="data.introduction"></Introduction>
                    <Knowledge :data="data.knowledge" :title="Object.keys(data)[3]"></Knowledge>
                    <Course :data="data.course" :title="Object.keys(data)[4]"></Course>
                    <Work :data="data.work" :title="Object.keys(data)[5]"></Work>
                    <Education :data="data.education" :title="Object.keys(data)[6]"></Education>
                    <Repository :data="data.repository" :title="Object.keys(data)[7]"></Repository>
                </v-col>
                <v-col id="right" class="panel-1" cols="12" xs="12" sm="4">
                    <v-container class="right-container">
                        <Profile :data="data.profile" :title="Object.keys(data)[0]"></Profile>
                        <Skill :data="data.skill" :title="Object.keys(data)[1]"></Skill>
                    </v-container>
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
    import Profile from "./components/Profile"
    import Skill from "./components/Skill"

    import Introduction from "./components/Introduction"
    import Knowledge from "./components/Knowledge"
    import Course from "./components/Course"
    import Work from "./components/Work"
    import Education from "./components/Education"
    import Repository from "./components/Repository"

    import data from '../data'


    export default {
        name: 'App',

        components: {
            Knowledge,
            Repository,
            Profile,
            Introduction,
            Skill,
            Course,
            Work,
            Education,
        },

        data() {
            return {
                data: data
            }
        },

        methods: {}
    };
</script>

<style lang="css">
    * {
        box-sizing: border-box;
    }

    a {
        color: blue !important;
    }

    body {
        max-width: 1100px;
        max-height: 1400px;
        margin: auto;
        padding-top: 2%;
    }

    #left {
        border-color: red;
    }

    #left > * {
        margin-bottom: 12px;
    }

    #right {
        background-color: #229999;
        margin: auto;
    }

    .right-container {
        min-width: 290px;
        max-width: 400px;
    }
</style>
