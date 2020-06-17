<template>
    <v-app>
        <v-content>
            <div class="d-flex flex-column flex-sm-row">
                <div id="left" class="panel-1 d-flex flex-column order-2 order-sm-1">
                    <Introduction :data="data.introduction"></Introduction>
                    <Knowledge :data="data.knowledge" :title="Object.keys(data)[3]"></Knowledge>
                    <Course :data="data.course" :title="Object.keys(data)[4]"></Course>
                    <Work :data="data.work" :title="Object.keys(data)[5]"></Work>
                    <Education :data="data.education" :title="Object.keys(data)[6]"></Education>
                    <Repository :data="data.repository" :title="Object.keys(data)[7]"></Repository>
                </div>
                <div id="right" class="panel-1 d-flex flex-column order-1 order-sm-2">
                    <Profile :data="data.profile" :title="Object.keys(data)[0]"></Profile>
                    <Skill :data="data.skill" :title="Object.keys(data)[1]"></Skill>
                </div>
            </div>
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

    const template = require('../data.template.js')
    let data
    try {
        data = require('../data.js')
    } catch (e) {
        alert('data.js is not found!')
    }

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
                data: data || template
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

    .v-card {
        box-shadow: none !important;
    }

    .v-card__subtitle, .v-card__text, .v-card__title {
        padding: 0 8px !important;
        color: black !important;
    }

    .v-card__title {
        padding: 4px !important;
    }


    body {
        max-width: 1000px;
        max-height: 1200px;
        margin: auto;
        /*padding: 1%;*/
    }

    #left {
        flex: 3 3 75%;
        margin-right: 12px;
    }

    #right {
        flex: 1 1 30%;
        background-color: #229999;
        margin-top: 4px;
        /*max-width: 30%*/
    }

</style>
