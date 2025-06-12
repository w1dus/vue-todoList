<template lang="ko">
    <form>
        <section class="todo_bg">
            <article class="centerBox">
                <div class="bigTitle">
                    Write
                </div>
                <router-link to="/" class="closeBtn">
                    <svg-icon type="mdi" :path="closeIcon"></svg-icon>
                </router-link>
                <div class="writeWrap">
                    <div class="contentWrap">
                        <div class="title">to-do</div>
                        <div class="iptBox">
                            <input  
                                required 
                                class="ipt"  
                                placeholder="Please write down your to-do"
                                v-model="subject"
                            />
                        </div>
                    </div>
                    <div class="contentWrap">
                        <div class="title">status</div>
                        <div class="iptBox">
                            <select class="ipt" v-model="status">
                                <option value="1">급하지않음</option>
                                <option value="2">보통</option>
                                <option value="3">급함</option>
                            </select>
                        </div>
                    </div>
                    <div class="contentWrap">
                        <div class="title">memo</div>
                        <div class="iptBox">
                            <textarea class="ipt" v-model="memo"></textarea>
                        </div>
                    </div>
                </div>
                <button class="submitBtn" @click.prevent="submitHandler" >Done</button>
            </article>
        </section>
    </form>
</template>


<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose } from '@mdi/js';

export default {
    name : 'todo-write',
    components: {
        SvgIcon
    },
    data() {
        return {
            id: "",
            subject: "", 
            status : "1", 
            memo : "",
            todoItem : JSON.parse(localStorage.getItem('todolist')) || [],
            closeIcon: mdiClose,
        }
    },
    methods : {
        submitHandler () {
            const newItem = { 
                check : false,
                subject : this.subject, 
                status : this.status, 
                memo : this.memo, 
                id: Date.now(),
            }
            this.todoItem.push(newItem)
            window.localStorage.setItem('todolist', JSON.stringify(this.todoItem));
            this.$router.push('/'); 
        }
    }
}
</script>