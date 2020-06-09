<template>
    <v-container>
        <v-container class="justify-center font-weight-bold">
            {{profile.name}}
        </v-container>
        <v-list>
            <v-list-item
                v-for="(item, i) in profile.items"
                :key="i"
            >
                <v-list-item-icon class="mr-2">
                    <v-icon v-text="item.icon"/>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="text-wrap" v-text="stringify(item.value)"/>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        name: "Profile",
        props: {
            profile: {
                type: Object,
                default: function () {
                    return {
                        name: 'name',
                        items: [
                            {
                                "name": "degree",
                                "icon": "mdi-certificate",
                                "value": "Master of Science in Computer Science"
                            }
                        ]
                    }
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            stringify: (item) => Array.isArray(item) ? item.join(', ') : item.toString()
        }
    }
</script>

<style scoped>

</style>