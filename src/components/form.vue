







<style scoped>

    .pos {
        padding: 30px 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 6px;
    }
    .rs {
        float: right;
    }
    .a {
        float: right;
        margin-left: 10px;
        margin-right: 60px;
    }
    .b {
        float: right;
    }
    .xd {
        margin-top: 10px;
    }
    .sp {
        margin-left: 30px;
    }
    .pp {
        color: #2d8cf0;
        font-weight: bold;
    }
    .blo {
        font-weight: bold;
    }
    .page {
        float: right;
        margin: 10px 0;
    }
    .tab {
        width: 100%;
        float: right;
    }

</style>

<template>

    <div> 
        <div class="page">
            <Page 
                :total="round" 
                :page-size="num" 
                :page-size-opts="pages" 
                show-sizer 
                @on-change="changepage" 
                @on-page-size-change="onch"
            ></Page>
        </div>

        <div class="tab">
            <Table border stripe :columns="columns1" :data="data1"></Table>
            <Modal
                v-model="modall"
                title="查看信息"
                :styles="{width: '700px',top: '60px'}"
                @on-ok="cancel"
                @on-cancel="cancel">
                <div>
                    <span class="pp">基本信息</span>
                    <div class="pos">
                        <span class="blo">机器ID：{{this.datalist.ahao}}</span>

                        <span class="sp blo">物理编号：{{this.datalist.bhao}}</span>

                        <span class="sp blo">投放时间：{{this.datalist.ghao}}</span>

                        <span class="sp blo">回收量：{{this.datalist.jhao}}</span>

                        <span class="sp blo">状态：{{this.datalist.khao}}</span>
                    </div>
                </div>

                <div>
                    <span class="pp">管理员信息</span>
                    <div class="pos">
                        <span class="blo">管理员：{{this.datalist.hhao}}</span>

                        <span class="sp blo">联系方式：{{this.datalist.ihao}}</span>
                    </div>
                </div>

                <div>
                    <span class="pp">地址信息</span>
                    <div class="pos">
                        <div>
                            <span class="blo">
                                地区：  {{this.datalist.chao}}-
                                        {{this.datalist.dhao}}-
                                        {{this.datalist.ehao}}
                            </span>
                        </div>

                        <div class="xd">
                            <span class="blo">详细地址：{{this.datalist.fhao}}</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    </div>

</template>

<script>


    import ooo from '../js/tab.js'


    import { mapState } from 'vuex'

    export default {

        components : {

        },

        data () {

            return {

                columns1 : [
                    {
                        title: '机器ID',
                        key: 'Fdevice_id'
                    },
                    {
                        title: '物理编号',
                        key: 'Fdevice_num',
                        "sortable": true
                    },
                    {
                        title: '省份',
                        key: 'aaa'
                    },
                    {
                        title: '城市',
                        key: 'bbb'
                    },
                    {
                        title: '区',
                        key: 'ccc'
                    },
                    {
                        title: '详细地址',
                        key: 'Faddr'
                    },
                    {
                        title: '投放时间',
                        key: 'Fdelivery_time',
                        "sortable": true
                    },
                    {
                        title: '管理员',
                        key: 'Fdevice_admin_name'
                    },
                    {
                        title: '联系方式',
                        key: 'Fdevice_admin_phone'
                    },
                    {
                        title: '回收量',
                        key: 'Frecycle_total_count',
                        "sortable": true
                    },
                    {
                        title: '状态',
                        key: 'Fdevice_status'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 167,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.modify(params.index)
                                        }
                                    }
                                }, '修改')
                            ]);
                        }
                    }
                ],
                data1    : [],
                datalist : {
                    ahao : '' ,
                    bhao : '' ,
                    chao : '' ,
                    dhao : '' ,
                    ehao : '' ,
                    fhao : '' ,
                    ghao : '' ,
                    hhao : '' ,
                    ihao : '' ,
                    jhao : '' ,
                    khao : '' ,
                },
                modall : false ,
                modald : false ,
                fsl    : '',
                round  : ''          ,
                num    : 10          ,
                pages  : [10, 20, 30],
                page   : 1           ,
                adata  : [],

            }
        },

        computed : {

            ...mapState([

                'datanum',
                'adddd'  ,
                'poo'    ,

            ])

        },

        watch : {

            datanum () {
                this.data1 = this.datanum
            },

            adddd () {
                this.changepage(this.page)
            },

            poo () {
                this.data1 = this.datanum

                this.pop()

            }

        },

        methods : {

            pop () {

                this.adata = this.data1

                this.round = this.data1.length

                if(this.data1.length < this.num){

                    this.data1 = this.adata

                }else{

                    this.data1 = this.adata.slice(0,this.num)

                }
               
            },

            changepage (index) {

                this.page = index

                var start = ( index - 1 ) * this.num

                var end = index * this.num

                this.data1 = this.adata.slice(start, end)

            },

            onch (kk) {

                this.num = kk

                this.changepage(this.page)

            },

            cancel () {

            },

            // 实现查看功能
            show (index) {

                this.modall = true

                this.datalist.ahao = this.data1[index].Fdevice_id
                this.datalist.bhao = this.data1[index].Fdevice_num
                this.datalist.chao = this.data1[index].aaa
                this.datalist.dhao = this.data1[index].bbb 
                this.datalist.ehao = this.data1[index].ccc
                this.datalist.fhao = this.data1[index].Faddr 
                this.datalist.ghao = this.data1[index].Fdelivery_time
                this.datalist.hhao = this.data1[index].Fdevice_admin_name 
                this.datalist.ihao = this.data1[index].Fdevice_admin_phone
                this.datalist.jhao = this.data1[index].Frecycle_total_count 
                this.datalist.khao = this.data1[index].Fdevice_status

            },

            // 实现删除功能
            remove (index) {
                this.data1.splice(index, 1)
            },

            modify (index) {

                this.$store.commit('mod', false)

                setTimeout( that => {
                    that.$store.commit('mod', true)
                }, 10, this)

                this.$store.commit('mods', index)
                this.$store.commit('modss', this.data1)

            }

        },

        created () {

            let ob = ooo.obj

            for (let i in ob) {

                let arr = ob[i].Farea_name.split('-')

                ob[i].aaa = arr[0]

                ob[i].bbb = arr[1]

                ob[i].ccc = arr[2]

            }

            this.data1 = ob

            this.pop()

        },

        mounted () {}

    }

</script>
