<template>
    <div class="u-projects">
        <div class="u-title">
            <h1>articles</h1>
        </div>
        <div class="u-card-projects">
            <template v-for="article in articles" :key="article.guid">
                <CardCommon
                    :action="'read more'" 
                    :cardTitle="article.title" 
                    :description="article.description"
                    :srcImg="article.thumbnail"
                    :altImg="article.title" 
                    :imgTechUrl="[
                                jsImg,
                                html5Img,
                                css3Img
                                ]" 
                    :urlProject="article.link"
                    :titleAlignLeft="true"
                >
                    <div class="u-pub-date"><span>{{ article.pubDate }}</span></div>
                </CardCommon>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted, computed } from 'vue';
import CardCommon from '@/components/CardCommon.vue';

import { useGetArticles } from '@/stores/getArticles';

import { 
        css3Img, 
        html5Img, 
        jsImg,   
        tsImg, 
        vueImg,  
    } from '@/util/assetHandling';

interface article {
    title: string,
    pubDate: Date | string,
    link: string,
    guid: string,
    author: string,
    thumbnail: string,
    description: string
}
    
const pageIsLoaded = ref(false);
const articles = ref<article[]>([]);
const imgUrls = ref<string[]>([]);

const getArticles = useGetArticles();

//const srcImgMatch = articles.value.description.match("/\bhttps?:\/\/\S+/gi");

onMounted(() => {
    getArticlePosts();
    pageIsLoaded.value = true;
});

const getArticlePosts = async () => {
    try {
        const { items } = await getArticles.getArticles(); 
        articles.value = items;
        imgUrls.value = getImgUrlMatches(articles.value);
        populateArticlesURLImg(articles.value)
        summarizeDescription(articles.value);
        transformPubDate(articles.value);
        console.log(articles.value)
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

const populateArticlesURLImg = (articles: article[]) => {
    articles.forEach((article, index) => {
        article.thumbnail = imgUrls.value[index]
    });

    //return articles;
}

const summarizeDescription = (articles: article[]) => {
    let regExArray: RegExpMatchArray | null = null;
    articles.forEach((article) => {
        regExArray = article.description?.match(/(?<=<p>).*(?=<\/p>)/);
        article.description = regExArray ? `${regExArray.toString().substring(0, 90)}...` : "";
    });
}

const transformPubDate = (articles: article[]) => {
    let fullDate, date, day, month, year = null
    articles.forEach((article) => {
        date = new Date(article.pubDate); 
        day = date.getDate();
        month = date.toLocaleString('default', {month: 'long'});
        year = date.getFullYear();
        // month = month < 10 ? `0${month}`: month;

        fullDate = `${day} ${capitalizeFirstLetter(month)} ${year}`;
        article.pubDate = fullDate;
    });
}

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const getImgUrlMatches = (articles: article[]) => {
    let imgUrls: string[] = [];
    let regExArray: RegExpMatchArray | null = null;
    for (const article of articles) {
        regExArray = article.description.match(/(https?:\/\/\S+)(?=")/);
        regExArray ? imgUrls.push(regExArray[0]) : imgUrls.push(""); 
    }

    return imgUrls;
}


</script>

<style scoped>

.u-projects {
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.u-title h1 {
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
}

.u-card-projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.u-pub-date {
    padding-left: 10px;
    color: var(--color-text-light);
}
</style>