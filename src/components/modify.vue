







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

</style>

<template>

    <div> 
        <Modal
            v-model="modald"
            title="修改信息"
            ok-text="修改"
            :styles="{width: '980px',top: '30px'}"
            @on-ok="updata"
            @on-cancel="cancel">
            <div>
                <span class="pp">基本信息</span>
                <div class="pos">
                    <span>物理编号：</span>
                    <Input 
                        v-model="aa" 
                        placeholder="请输入物理编号" 
                        style="width: 150px"
                    ></Input>

                    <span class="sp">机器ID：</span>
                    <Input 
                        v-model="bb" 
                        placeholder="请输入机器ID" 
                        style="width: 150px"
                    ></Input>

                    <span class="sp">回收量：</span>
                    <Input 
                        v-model="cc" 
                        placeholder="请输入回收量" 
                        style="width: 150px"
                    ></Input>

                    <span class="sp">状态：</span>
                    <Input 
                        v-model="dd" 
                        placeholder="请输入状态" 
                        style="width: 150px"
                    ></Input>
                </div>
            </div>

            <div>
                <span class="pp">管理员信息</span>
                <div class="pos">
                    <span>管理员：</span>
                    <Input 
                        v-model="ee" 
                        placeholder="请输入管理员" 
                        style="width: 150px"
                    ></Input>

                    <span class="sp">电话：</span>
                    <Input 
                        v-model="ff" 
                        placeholder="请输入联系电话" 
                        style="width: 150px"
                    ></Input>
                </div>
            </div>

            <div>
                <span class="pp">地址信息</span>
                <div class="pos">
                    <div>
                        <span>地区：</span>
                        <Select v-model="gg" style="width:150px" @on-change="onlow">
                            <Option 
                                 v-for="item in cityList" 
                                :value="item.label" 
                                :key  ="item.value"
                            >{{item.label}}</Option>
                        </Select>

                        <Select v-model="city_id" style="width:150px" @on-change="onlows">
                            <Option 
                                v-for="item in obs" 
                                :value="item.con" 
                                :key  ="item.c_id"
                            >{{item.con}}</Option>
                        </Select>

                        <Select v-model="ii" style="width:150px">
                            <Option 
                                v-for="item in res" 
                                :value="item.reg" 
                                :key  ="item.reg"
                            >{{item.reg}}</Option>
                        </Select>


                    </div>

                    <div class="xd">
                        <span>详细地址：</span>
                        <Input 
                            v-model="jj" 
                            placeholder="请输入详细地址" 
                            style="width: 750px"
                        ></Input>
                    </div>
                </div>
            </div>
        </Modal>
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

                modald   : false   ,
                aa       : ''      ,
                bb       : ''      ,
                cc       : ''      ,
                dd       : ''      ,
                ee       : ''      ,
                ff       : ''      ,
                gg       : '1'     ,
                hh       : ''      ,
                ii       : ''      ,
                jj       : ''      ,
                city_id  : ''      , 
                cityList : ooo.List,
                obs      : ''      ,
                res      : ''      ,

            }
        },

        computed : {

            ...mapState([

                'mod'

            ])

        },

        watch : {

            mod () {

                this.modald = true

                this.bb = this.$store.state.modss[this.$store.state.mods].Fdevice_id
                this.aa = this.$store.state.modss[this.$store.state.mods].Fdevice_num
                this.jj = this.$store.state.modss[this.$store.state.mods].Faddr 
                this.ee = this.$store.state.modss[this.$store.state.mods].Fdevice_admin_name 
                this.ff = this.$store.state.modss[this.$store.state.mods].Fdevice_admin_phone
                this.cc = this.$store.state.modss[this.$store.state.mods].Frecycle_total_count 
                this.dd = this.$store.state.modss[this.$store.state.mods].Fdevice_status
                this.gg = this.$store.state.modss[this.$store.state.mods].aaa
                this.city_id = this.$store.state.modss[this.$store.state.mods].bbb
                this.ii = this.$store.state.modss[this.$store.state.mods].ccc

            }

        },

        methods : {

            cancel () {

            },

            onlow (id) {

                this.res = []

                let oo = this.cityList

                for (let i in oo) {

                    if (oo[i].label == id) {

                        this.obs = oo[i].city
                    
                        break;

                    }

                }

                // this.city_id = this.obs[0] ? this.obs[0].c_id : ''

            },

            onlows (id) {

                let oo = this.obs

                for (let i in oo) {

                    if (oo[i].con == id) {

                        this.res = oo[i].region
                        
                        break;

                    }

                }

                // this.ii = this.res[0] ? this.res[0].ii : ''

            },

            // 实现修改功能
            updata () {
                if (this.aa != '') {
                    this.$store.state.modss[this.$store.state.mods].Fdevice_num = this.aa
                }
                if (this.bb != '') {
                    this.$store.state.modss[this.$store.state.mods].Fdevice_id = this.bb
                }
                if (this.cc != '') {
                    this.$store.state.modss[this.$store.state.mods].Frecycle_total_count = this.cc
                }
                if (this.dd != '') {
                    this.$store.state.modss[this.$store.state.mods].Fdevice_status = this.dd
                }
                if (this.ee != '') {
                    this.$store.state.modss[this.$store.state.mods].Fdevice_admin_name = this.ee
                }
                if (this.ff != '') {
                    this.$store.state.modss[this.$store.state.mods].Fdevice_admin_phone = this.ff
                }
                if (this.gg != '') {
                    this.$store.state.modss[this.$store.state.mods].aaa = this.gg
                }
                if (this.city_id != '') {
                    this.$store.state.modss[this.$store.state.mods].bbb = this.city_id
                }
                if (this.ii != '') {
                    this.$store.state.modss[this.$store.state.mods].ccc = this.ii
                }
                if (this.jj != '') {
                    this.$store.state.modss[this.$store.state.mods].Faddr = this.jj
                }

            }

        },

        created () {

        },

        mounted () {}

    }

</script>
