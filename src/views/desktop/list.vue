<template lang="ko">
    <section class="todo_bg">
        <article class="centerBox">
            <div class="bigTitle">
                Today 
            </div>
            <router-link to="/write">
                <button class="addBtn">
                    add <svg-icon type="mdi" :path="createIcon"></svg-icon>
                </button>
            </router-link>
            <ul class="itemList">
                <li v-for="item of todoItems.slice().reverse()" :key="item.id">
                    <label>
                        <input type="checkbox" v-model="item.check" @input="checkUpdate(item.id)"/>
                        <div class="item">
                            <svg-icon type="mdi" :path="checkBefore" class="checkBefore"></svg-icon>
                            <svg-icon type="mdi" :path="checkAfter" class="checkAfter"></svg-icon>
                            <div class="contentBox">
                                <div class="title">{{item.subject}}</div>
                                <div class="content">{{item.memo}}</div>
                                <div v-if="item.status === '1'" class="label blue">급하지않음</div>
                                <div v-if="item.status === '2'" class="label">보통</div>
                                <div v-if="item.status === '3'" class="label red">급함</div>
                                <div class="buttonBox">
                                    <button class="modify" @click="goEditPage(item.id)">수정 <svg-icon type="mdi" :path="modifyIcon"></svg-icon></button>
                                    <button class="del" @click="deleteHandler(item.id)">삭제 <svg-icon type="mdi" :path="deleteIcon"></svg-icon></button>
                                </div>
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
        </article>
    </section>
</template>


<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlusCircle, mdiTrashCan, mdiPencil, mdiCheckboxBlankOutline,mdiCheckboxOutline } from '@mdi/js';

export default {
    name : 'todo-list',
    components: {
        SvgIcon
    },
    data() {
        return {
            todoItems: JSON.parse(localStorage.getItem('todolist')) || [],
            createIcon: mdiPlusCircle,
            deleteIcon: mdiTrashCan,
            modifyIcon: mdiPencil,
            checkBefore: mdiCheckboxBlankOutline,
            checkAfter:mdiCheckboxOutline,
        }
    },
    mounted() {
        const saved = localStorage.getItem('todolist');
        if (saved) {
            this.todoItems = JSON.parse(saved).map(item => ({ ...item, check: item.check === true || item.check === 'true' }));
        }
    },
    methods : {
        checkUpdate(id) {
            const updatedList = this.todoItems.map(item =>
                item.id === id ? { ...item, check: !item.check } : item
            );
            localStorage.setItem('todolist', JSON.stringify(updatedList));
            this.todoItems = updatedList;
        },
        deleteHandler(id) {
            const updatedList = this.todoItems.filter(item => item.id !== id);
            localStorage.setItem('todolist', JSON.stringify(updatedList));
            this.todoItems = updatedList;
        },
        goEditPage(id) {
            this.$router.push({ name: 'TodoListModify', params: { id } });
        }
    }
    
}
</script>