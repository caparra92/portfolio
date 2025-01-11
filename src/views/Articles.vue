<template>
    <div class="u-projects">
        <div class="u-title">
            <h1>articles</h1>
        </div>
        <div class="u-card-projects" v-if="pageIsLoaded" @scroll="enterOnScroll">
            <template v-for="article in articles" :key="article.guid">
                <CardCommon
                    :action="'read more'" 
                    :cardTitle="article.title" 
                    :description="article.description"
                    :srcImg="article.thumbnail"
                    :altImg="article.title" 
                    :urlProject="article.link"
                    :titleAlignLeft="true"
                >
                    <div class="u-pub-date"><span>{{ article.pubDate }}</span></div>
                    <template v-slot:tags>
                        <div class="u-pub-date u-tag-container">
                            <div class="u-tag-shape" v-for="tag in article.categories" :key="tag" >
                                <span class="u-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </template>
                </CardCommon>
            </template>
        </div>
        <!-- <Loader v-else></Loader> -->
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted, computed } from 'vue';
import CardCommon from '@/components/CardCommon.vue';
import Loader from '@/components/Loader.vue';

import { useGetArticles } from '@/stores/getArticles';

interface article {
    title: string,
    pubDate: Date | string,
    link: string,
    guid: string,
    author: string,
    thumbnail: string,
    description: string,
    categories: Array<string>
}
    
const pageIsLoaded = ref(false);
const articles = ref<article[]>([]);
const imgUrls = ref<string[]>([]);

const getArticles = useGetArticles();

//const srcImgMatch = articles.value.description.match("/\bhttps?:\/\/\S+/gi");

const cardContainer = ref<HTMLElement | null>(null);
const enterOnScroll = () => {
    console.log("User is scrolling");
    
    const observer = new IntersectionObserver(
        (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add('u-scroll-enter');
            observer.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe all cards
  const cards = cardContainer.value?.querySelectorAll('.u-card-container');
  cards?.forEach((card) => observer.observe(card));
};

onMounted(() => {
    enterOnScroll();
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
        // console.log(articles.value)
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

.u-tag-container {
    display: flex;
    flex-wrap: wrap;
}

.u-tag {
    position: relative;
    background-color: var(--color-text-soft);
    padding: 3px;
    margin: 0 6px;
    font-size: .7rem;
    color: var(--color-text);
    border-radius: 5px 0 0 5px;
}

.u-tag::before {
    content: '';
    display: inline-block;
    background-color: var(--color-background);
    padding: 3px;
    margin: 0 3px;
    border-radius: 10px;
    height: 2px;
    width: 2px;
}

.u-tag::after {
    content: '';
    display: inline-block;
    border-top: 10px solid transparent;
    border-left: 10px solid var(--color-text-soft);
    border-bottom: 10px solid transparent;
    position: absolute;
    height: 3px;
    width: 3px;
    top: 0;
    right: -10px;
}
</style>