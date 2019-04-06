<template>
<<<<<<< HEAD
    <i-select v-model="cValue" :style="'width:' + width + 'px'">
        <i-option v-if="top.has" :value="top.value">顶级分类</i-option>
        <i-option v-for="v in data" :value="v[attr.id]" :key="v[attr.id]">{{ v[attr.floor] > 1 ? '|' + '_'.repeat((v[attr.floor] - 1) * 4) : '' }}{{ v[attr.name] }}</i-option>
    </i-select>
=======
    <select v-model="cValue" v-html="html"></select>
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
</template>

<script>
    export default {
        name: "v-select" ,
        data () {
            return {
<<<<<<< HEAD
                cValue: 0 ,
            };
        } ,
        props: {
            value: {
                type: [String , Number] ,
                required: true ,
            },
            data: {
                type: Array ,
                required: true ,
            } ,
            width: {
                type: Number ,
                default: 200 ,
=======
                // 内容
                html: '' ,
                delimiter: '|--' ,
                prefix: '&nbsp;' ,
                // 每加深一个层级就新增给定数量的分隔符
                count: 8 ,
                cValue: '' ,
            };
        } ,
        props: {
            hasTop: {
                type: Boolean ,
                default () {
                    return false;
                } ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
            } ,
            top: {
                type: Object ,
                default () {
                    return {
<<<<<<< HEAD
                        has: true ,
                        value: 0
                    };
                } ,
            } ,
            attr: {
                type: Object ,
                default () {
                    return {
                        id: 'id',
                        floor: 'floor',
                        name: 'name',
                    }
                }
            }
        } ,
        watch: {
=======
                        name: '顶级分类' ,
                        value: 0
                    };
                }
            } ,
            data: {
                type: Array ,
                default () {
                    return [];
                }
            } ,
            value: [String , Number]

        } ,
        watch: {
            data (nv , ov) {
                // 重置
                this.html = `<option value="">请选择...</option>`;
                let top = this.hasTop ? `<option value="${this.top.value}">${this.top.name}</option>` : '';
                this.html += top;
                let genOption = (data , floor) => {
                    for (let i = 0; i < data.length; ++i)
                    {
                        let cur = data[i];
                        let prefix = this.prefix.repeat((floor - 1) * this.count) + this.delimiter;
                        this.html += `<option value="${cur.id}">${prefix + cur.name}</option>`;
                        if (cur.children.length > 0) {
                            genOption(cur.children , floor + 1);
                        }
                    }
                };
                genOption(nv , 1);
            } ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
            cValue (nv) {
                this.$emit('input' , nv);
            } ,
            value: {
                immediate: true ,
                handler (nv) {
                    this.cValue = nv;
                }
            }
<<<<<<< HEAD
        } ,
=======
        }
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
    }
</script>

<style scoped>

</style>