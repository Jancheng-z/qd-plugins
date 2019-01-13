/**
*create by Jancheng ON 2019/1/9
*
**/
<template>
    <div>
        <h3>qd-input(轻点输入框)</h3>
        <div class="qd-input-demo">
            <div class="qd-input-use">
                <h4>使用说明</h4>
            </div>
            <div style="width: 500px">
               <qd-input></qd-input>
            </div>
        </div>
    </div>
</template>
<script>
    import {qdInput} from 'qd-plugins'
    import  "qd-plugins/lib/qd-plugins.css"

    // import  qdInput from "../../packages/qd-input/src/qd-input"
    export default {
     components:{
            qdInput
        }
    }
</script>
<style lang="less">
    .qd-input-demo{
        display: flex;
        flex-direction: initial;
        margin-top: 50px;
        .qd-input-use{
            width: 50%;
        }
    }
</style>