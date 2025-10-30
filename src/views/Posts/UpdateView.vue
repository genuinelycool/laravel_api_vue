<script setup>
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { errors } = storeToRefs(usePostsStore());
const { getPost } = usePostsStore();

const post = ref(null);

const formData = reactive({
    title: '',
    body: ''
});

onMounted(async () => {
    post.value = await getPost(route.params.id);

    formData.title = post.value.title;
    formData.body = post.value.body;
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