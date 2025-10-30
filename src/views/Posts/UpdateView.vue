<script setup>
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

const { errors } = storeToRefs(usePostsStore());

const formData = reactive({
    title: '',
    body: ''
});
</script>

<template>
    <main>
        <h1 class="title">Update your post</h1>

        <form 
            
            class="w-1/2 mx-auto space-y-6"
        >
            <div>
                <input type="text" placeholder="Post Title" v-model="formData.title" />
                <p v-if="errors.title" class="error">{{ errors.title[0] }}</p>
            </div>

            <div>
                <textarea 
                    rows="6" 
                    placeholder="Post Content" 
                    v-model="formData.body"
                ></textarea>
                <p v-if="errors.body" class="error">{{ errors.body[0] }}</p>
            </div>

            <button class="primary-btn">Update</button>
        </form>

    </main>
</template>