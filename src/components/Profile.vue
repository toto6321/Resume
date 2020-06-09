<template>
    <v-container>
        <v-container>
            <p id="owner_name" class="text-center">{{data.name}}</p>
        </v-container>
        <v-list color="transparent" dense>
            <v-list-item v-for="(item, i) in data.items" :key="i" class="font-italic">
                <v-list-item-icon class="mr-3">
                    <v-icon v-text="item.icon"/>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title
                        v-if="/^(https|http|www)/g.test(item.value)"
                        class="text-wrap text--blue"
                        style="font-size: 1rem; word-break: break-word">
                        <a :href="item.value">{{stringify(item.value)}}</a>
                    </v-list-item-title>
                    <v-list-item-title v-else class="text-wrap" v-text="stringify(item.value)" style="font-size: 1rem"/>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        name: "Profile",
        props: {
            data: {
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
    #owner_name {
        font-size: 2rem;
        margin-bottom: 0;
        color: orange;
        font-weight: bold;
    }
</style>