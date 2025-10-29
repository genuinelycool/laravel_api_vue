<script setup>
import { usePostsStore } from '@/stores/posts';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { getPost } = usePostsStore();
const post = ref(null);

onMounted(async () => (post.value = await getPost(route.params.id)));
</script>

<template>
    <main>
        <div v-if="post">
            <div class="border-l-4 border-blue-500 pl-4 mt-12">
                <h2 class="font-bold text-3xl">{{ post.title }}</h2>
                <p class="text-xs text-slate-600 mb-4">
                    Posted by {{ post.user.name }}
                </p>
                <p>
                    {{ post.body }}                 
                </p>
            </div>
        </div>
        <div v-else>
            <h2 class="title">Page not found!</h2>
        </div>
    </main>
</template>