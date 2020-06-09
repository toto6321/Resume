<template>
    <v-app>
        <v-content>
            <v-row>
                <v-col id="left" class="panel-1" cols="12" xs="12" sm="8">
                    <Introduction :data="data.introduction"></Introduction>
                    <Knowledge :data="data.knowledge"></Knowledge>
                    <Course></Course>
                    <Work></Work>
                    <Education></Education>
                    <Repository></Repository>
                </v-col>
                <v-col id="right" class="panel-1" cols="12" xs="12" sm="4">
                    <Profile :profile="data.profile"></Profile>
                    <Skill :data="data.skill"></Skill>
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
    import Profile from "./components/Profile";
    import Skill from "./components/Skill";
    import Introduction from "./components/Introduction";

    import Course from "./components/Course";
    import Work from "./components/Work";
    import Education from "./components/Education";
    import Repository from "./components/Repository";

    import data from './data'
    import Knowledge from "./components/Knowledge";


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

    body {
        max-width: 1100px;
    }

    #left {
        border-color: red;
    }

    #right {
        background-color: #229999;
    }
</style>
