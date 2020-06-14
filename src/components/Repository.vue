<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <div class="repository_wrapper d-flex flex-column flex-sm-row">
                <div v-for="(e, i) in data" :key="i"
                     class="repository"
                >
                    <div class="mb-1"><h3>{{e.name}}</h3></div>
                    <div class="mb-1">
                        <a v-for="(e2, i2) in e.technical_stack" :key="i2"
                           :href="e2.link"
                        >
                            <v-avatar size="24">
                                <v-img width="24" height="24" :src="e2.logo" :alt="e2.name"></v-img>
                            </v-avatar>
                        </a>
                    </div>
                    <div>
                        {{e.description }}
                    </div>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Repository",
        props: ['data', 'title'],
        data: function () {
            return {
                color_array: [
                    'green',
                    'cyan',
                    'indigo',
                    'blue',
                    'lime',
                    'pink light-2',
                    'purple',
                    'teal',

                ]
            }
        }
    }
</script>

<style scoped lang="sass">
    .repository_wrapper
        flex-wrap: wrap

        .repository
            flex: 1 1 45%
            margin: 0 4px
            /*min-width: 300px*/

            .school-logo
                flex: 0 0 25%
                width: 108px

</style>