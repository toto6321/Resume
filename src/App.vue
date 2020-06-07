<template>
    <v-app>
        <v-content>
            <v-row>
                <v-col id="left" class="panel-1" cols="12" xs="12" sm="8">
                    <v-container class="d-flex flex-column">
                        <Introduction></Introduction>
                        <Skill></Skill>
                        <Course></Course>
                        <Work></Work>
                        <Education></Education>
                        <Repository></Repository>
                    </v-container>
                </v-col>
                <v-col id="right" class="panel-1" cols="12" xs="12" sm="4">
                    <PersonInformation></PersonInformation>
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
    import PersonInformation from "./components/PersonInformation";
    import Introduction from "./components/Introduction";
    import Skill from "./components/Skill";
    import Course from "./components/Course";
    import Work from "./components/Work";
    import Education from "./components/Education";
    import Repository from "./components/Repository";


    export default {
        name: 'App',

        components: {
            Repository,
            PersonInformation,
            Introduction,
            Skill,
            Course,
            Work,
            Education,
        },

        data: () => ({
            //
        }),
    };
</script>

<style lang="css">
    * {
        box-sizing: border-box;
    }

    body {
        max-width: 1100px;
    }

    .panel-1 {
        height: 400px;
        border: solid 1px cyan;
    }

    #left {
        border-color: red;
        background-color: chocolate;
    }

    #right {
        background-color: cadetblue;
    }
</style>
