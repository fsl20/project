







<style scoped>

    .inp {
        float: left;
        margin: 10px;
    }
    .btn {
        float: left;
        margin: 10px 10px 10px 0;
    }

</style>

<template>

    <div> 

        <div class="inp">
             <Input v-model="value" placeholder="请输入..." style="width: 200px"></Input>
        </div>

        <!-- 搜索功能 -->
        <div class="btn">
            <Button type="primary" @click="pso">搜索</Button>
        </div>

    </div>

</template>

<script>

    import ooo from '../js/tab.js'

    export default {

        components : {

        },

        data () {

            return {

                value : '',
                test  : [],

            }
        },

        computed : {

        },

        methods : {

            pso () {
                
                this.test = []

                let oo = ooo.obj

                for (let i in oo) {

                    let num = JSON.stringify(oo[i])

                    if (num.indexOf(this.value) != -1 ) {

                        this.test.push(oo[i])
                        this.$store.commit('datanum', this.test)
                        this.$store.commit('poo', false)

                        setTimeout( that => {
                            this.$store.commit('poo', true)
                        }, 10, this)

                    } else {
                        // this.test = []
                        this.$store.commit('datanum', this.test)
                    }

                }

            },

        },

        created () {

        },

        mounted () {}

    }

</script>
