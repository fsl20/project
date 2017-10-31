







<style scoped>

    

</style>

<template>

    <div> 

        <div>
            <search></search>
        </div>

        <div>
            <add></add>
        </div>

        <div>
            <forms></forms>
        </div>

        <div>
            <modify></modify>
        </div>

    </div>

</template>

<script>

    import search from './search.vue'
    import add    from './add.vue'
    import forms  from './form.vue'
    import modify from './modify.vue'

    import ooo from '../js/tab.js'

    export default {

        components : {

            search,
            add   ,
            forms ,
            modify,

        },

        data () {

            return {

            }
        },

        computed : {

        },

        methods : {

        },

        created () {

        },

        mounted () {}

    }

</script>
