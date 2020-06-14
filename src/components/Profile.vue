<template>
    <div>
        <div id="owner_name" class="text-center orange--text py-4 pr-3">
            <h1>{{data.name}}</h1>
        </div>
        <ul class="px-3">
            <li v-for="(item, i) in data.items" :key="i" class="d-flex font-italic py-1">
                <div class="d-flex justify-center align-center mr-3 ">
                    <v-icon v-text="item.icon"/>
                </div>
                <div
                    v-if="/^(https|http|www)/.test(item.value)"
                    class="text-wrap text--blue"
                    style="font-size: 1rem; word-break: break-word">
                    <a :href="item.value">{{stringify(item.value)}}</a>
                </div>
                <div v-else
                     class="text-wrap" v-text="stringify(item.value)"/>
            </li>
        </ul>
    </div>
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

<style scoped lang="sass">
</style>