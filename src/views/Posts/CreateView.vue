<script setup>
import { reactive } from 'vue';

const formData = reactive({
    title: '',
    body: ''
});
</script>

<template>
    <main>
        <h1 class="title">Create a new post</h1>

        <form @submit.prevent="console.log(formData)" class="w-1/2 mx-auto space-y-6">
            <div>
                <input type="text" placeholder="Post Title" v-model="formData.title">
            </div>

            <div>
                <textarea 
                    rows="6" 
                    placeholder="Post Content" 
                    v-model="formData.body"
                ></textarea>
            </div>

            <button class="primary-btn">Create</button>
        </form>

    </main>
</template>