<template>
    <v-card>
        <v-card-title class="text-uppercase">{{title}}</v-card-title>
        <v-card-text>
            <v-container class="d-flex flex-column flex-sm-row">
                <v-card v-for="(e, i) in data" :key="i"
                        class="repository">
                    <v-card-title>{{e.name}}</v-card-title>
                    <v-card-subtitle>
                        <v-avatar size="24" v-for="(e2, i2) in e.technical_stack" :key="i2">
                            <v-img :src="e2.logo" width="24" height="24"></v-img>
                        </v-avatar>
                    </v-card-subtitle>
                    <v-card-text>
                        {{e.description }}
                    </v-card-text>
                </v-card>
            </v-container>
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
    .repository
        flex: 1 1 50%


        .school-logo
            flex: 0 0 25%
            width: 108px

</style>