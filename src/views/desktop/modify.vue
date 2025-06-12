<template lang="ko">
    <section class="todo_bg">
        <article class="centerBox">
            <div class="bigTitle">
                Modify
            </div>
            <router-link to="/" class="closeBtn">
                <svg-icon type="mdi" :path="closeIcon"></svg-icon>
            </router-link>
            <div class="writeWrap">
                <div class="contentWrap">
                    <div class="title">to-do</div>
                    <div class="iptBox">
                        <input type="text" required class="ipt" v-model="modifyItem.subject" placeholder="Please write down your to-do"/>
                    </div>
                </div>
                <div class="contentWrap">
                    <div class="title">status</div>
                    <div class="iptBox">
                        <select class="ipt" v-model="modifyItem.status">
                            <option value="1">급하지않음</option>
                            <option value="2">보통</option>
                            <option value="3">급함</option>
                        </select>
                    </div>
                </div>
                <div class="contentWrap">
                    <div class="title">memo</div>
                    <div class="iptBox">
                        <textarea class="ipt" v-model="modifyItem.memo"></textarea>
                    </div>
                </div>
            </div>
            <button class="submitBtn" @click="submitEdit">modify</button>
        </article>
    </section>
</template>


<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose } from '@mdi/js';

export default {
    name : 'todo-modify',
    components: {
        SvgIcon
    },
    data() {
        return {
            todoItems: JSON.parse(localStorage.getItem('todolist')) || [],
            modifyItem : {},
            closeIcon: mdiClose,
        }
    },
    mounted() {
        this.id = this.$route.params.id;

        const savedList = JSON.parse(localStorage.getItem('todolist')) || [];
        const id = Number(this.$route.params.id); 
        const foundItem = savedList.find(item => item.id === id);

        this.modifyItem = foundItem;
        console.log(this.modifyItem)
    },
    methods : {
        submitEdit() {
            const index = this.todoItems.findIndex(item => item.id === Number(this.id));
            if (index !== -1) {
                const updatedList = this.todoItems.map(item =>
                    item.id === Number(this.id) ? { 
                        ...item, 
                        subject: this.modifyItem.subject,
                        status: this.modifyItem.status,
                        memo: this.modifyItem.memo,
                    } : item
                );
                console.log(updatedList)
                this.todoItems = updatedList;
                localStorage.setItem('todolist', JSON.stringify(updatedList));
                this.$router.push('/'); // 수정 완료 후 이동
            }
        }
    }
}
</script>