







<style scoped>

    .btn {
        float: left;
        margin: 10px 10px 10px 0;
        position: relative;
    }
    .pp {
        color: #2d8cf0;
        font-weight: bold;
    }
    .por {
        width: 948px;
        height: 95px;
        margin: 10px 0;
        padding: 30px 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
    }
    .for {
        float: left;
        margin-right: 20px;
    }
    .lo {
        height: 153px;
    }
    .add {
        position: absolute;
        right: 17px;
        bottom: -12px;
    }
    .bn {
        width: 60px;
        height: 36px;
    }
    .nb {
        background: #fff;
    }
</style>

<template>

    <div class="btn">
        <Button type="primary" @click="add('formValidate')">添加机器</Button>
        <Modal
            v-model="modal"
            title="添加机器"
            ok-text="新增"
            :styles="{width: '980px',top: '20px'}"
            @on-ok="ok"
            @on-cancel="cancel">


            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <span class="pp">基本信息</span>
                <div class="por">
                    <div class="for">
                        <FormItem label="物理编号" prop="name">
                            <Input 
                                v-model="formValidate.name" 
                                placeholder="请输入物理编号" 
                                style="width: 150px"
                            ></Input>
                        </FormItem>
                    </div>

                    <div class="for">
                        <FormItem label="机器型号" prop="num">
                            <Select v-model="formValidate.num" placeholder="请选择机器型号" style=
                            "width: 150px">
                                <Option value="1"></Option>
                            </Select>
                        </FormItem>
                    </div>

                    <div class="for">
                        <FormItem label="投放时间">
                            <Row>
                                <Col span="13">
                                    <FormItem prop="date">
                                        <DatePicker 
                                            type="date" 
                                            placeholder="选择日期" 
                                            v-model="formValidate.date"
                                            style="width: 150px" 
                                            @on-change="com"
                                        ></DatePicker>
                                    </FormItem>
                                </Col>

                                <Col span="11">
                                    <FormItem prop="time">
                                        <TimePicker 
                                            type="time" 
                                            placeholder="选择时间"
                                            v-model="formValidate.time"
                                            style="width: 150px" 
                                            @on-change="con" 
                                        ></TimePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormItem>
                    </div>
                </div>

                <span class="pp">管理员信息</span>
                <div class="por">
                    <div class="for">
                        <FormItem label="管理员" prop="admin">
                            <Select v-model="formValidate.admin" placeholder="请选择管理员" style=
                            "width: 150px">
                                <Option value="1"></Option>
                            </Select>
                        </FormItem>
                    </div>

                    <div class="for">
                        <FormItem label="电话" prop="phone">
                            <Input 
                                v-model="formValidate.phone" 
                                placeholder="请输入电话" 
                                style="width: 150px"
                            ></Input>
                        </FormItem>
                    </div>

                    <div class="for">
                        <FormItem label="证件号" prop="pname">
                            <Input 
                                v-model="formValidate.pname" 
                                placeholder="请输入证件号" 
                                style="width: 150px"
                            ></Input>
                        </FormItem>
                    </div>
                </div>

                <span class="pp">地址信息</span>
                <div class="por lo">
                    <div class="for">
                        <FormItem label="地区" prop="region">
                            <Select 
                                v-model="formValidate.region" 
                                placeholder="广东省"
                                style="width: 150px" 
                                @on-change="onlow"
                            >
                                <Option 
                                     v-for="item in cityList" 
                                    :value="item.label" 
                                    :key  ="item.value"
                                >{{item.label}}</Option>
                            </Select>
                        </FormItem>
                    </div>

                    <div class="for">
                        <FormItem prop="city">
                            <Select 
                                v-model="formValidate.city" 
                                placeholder="深圳市" 
                                style="width: 150px" 
                                @on-change="onlows"
                            >
                                <Option 
                                    v-for="item in obs" 
                                    :value="item.con" 
                                    :key  ="item.c_id"
                                >{{item.con}}</Option>
                            </Select>
                        </FormItem>
                    </div>

                    <div class="for">
                        <FormItem prop="area">
                            <Select 
                                v-model="formValidate.area" 
                                placeholder="宝安区" 
                                style="width: 150px" 
                            >
                                <Option 
                                    v-for="item in res" 
                                    :value="item.reg" 
                                    :key  ="item.reg"
                                >{{item.reg}}</Option>
                            </Select>
                        </FormItem>
                    </div>

                    <div class="for">
                        <FormItem label="详细地址" prop="detailed">
                            <Input 
                                v-model="formValidate.detailed" 
                                placeholder="请输入详细地址" 
                                style="width: 700px"
                            ></Input>
                        </FormItem>
                    </div>
                </div>

                <div class="add">
                    <FormItem>
                        <Button 
                            class="bn nb" 
                            type="ghost" 
                            @click="handleReset('formValidate')" 
                            style="margin-left: 8px"
                        >重置</Button>

                        <Button 
                            class="bn" 
                            type="primary" 
                            @click="handleSubmit('formValidate')"
                        >添加</Button>
                    </FormItem>
                </div>
            </Form>
        </Modal>
    </div>

</template>

<script>


    import ooo from '../js/tab.js'

    export default {

        components : {

        },

        data () {

            return {
                modal    : false   ,
                cityList : ooo.List,
                obs      : ''      ,
                res      : ''      ,
                da       : ''      ,
                ti       : ''      ,
                formValidate: {
                    name     : '' ,
                    num      : '' ,
                    date     : '' ,
                    time     : '' ,
                    admin    : '' ,
                    phone    : '' ,
                    pname    : '' ,
                    region   : '' ,
                    city     : '' ,
                    area     : '' ,
                    detailed : '' ,
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '物理编号不能为空', trigger: 'blur' }
                    ],
                    num: [
                        { required: true, message: '请选择机器型号', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    admin: [
                        { required: true, message: '请选择管理员', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '电话不能为空', trigger: 'blur' }
                    ],
                    pname: [
                        { required: true, message: '证件号不能为空', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择省', trigger: 'change' }
                    ],
                    city: [
                        { required: true, message: '请选择市', trigger: 'change' }
                    ],
                    area: [
                        { required: true, message: '请选择区', trigger: 'change' }
                    ],
                    detailed: [
                        { required: true, message: '详细地址不能为空', trigger: 'blur' }
                    ],
                }

            }

        },

        computed : {

        },

        methods : {
            // 实现添加功能
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    
                    if (valid) {

                        let ob = ooo.obj

                        let stu= {
                            "Fdevice_num"         : this.formValidate.name, 
                            "Fdevice_admin_phone" : this.formValidate.num, 
                            "Fdelivery_time"      : this.da + '\t' + this.ti,
                            "Fdevice_admin_name"  : this.formValidate.admin,
                            "Faddr"               : this.formValidate.detailed,
                            "aaa"                 : this.formValidate.region,
                            "bbb"                 : this.formValidate.city,
                            "ccc"                 : this.formValidate.area,
                        }

                        ob.push(stu)

                        this.modal = false

                        this.$Message.success('添加成功!')

                        this.$store.commit('adddd', false)

                        setTimeout( that => {
                            that.$store.commit('adddd', true)
                        }, 10, this)

                    } else {
                        this.$Message.error('添加失败!')
                    }
                })
            },

            handleReset (name) {
                this.$refs[name].resetFields()

            },

            add (name) {
                this.modal = true

                this.handleReset(name)

            },

            ok () {

            },

            cancel () {

            },

            con (ss) {
                this.ti = ss

            },

            com (ff) {
                this.da = ff

            },

            onlow (id) {

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

            }

        },

        created () {

        },

        mounted () {}

    }

</script>
