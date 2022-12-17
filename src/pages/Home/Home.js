import {Banner} from "../../components/Banner";
import {Post} from "../../components/Post/Post";
import {Posts} from "../../components/Posts";
import {Works} from "../../components/Works";
import {Work} from "../../components/Work";

import profile from "../../assets/images/profile_photo.png"
import Rectangle_30 from "../../assets/images/Featured_works/rectangle_30.png"
import Rectangle_32 from "../../assets/images/Featured_works/rectangle_32.png"
import Rectangle_34 from "../../assets/images/Featured_works/rectangle_34.png"

const posts = [
    {
        title: 'Making a design system from scratch',
        subTitle: '12 Feb 2020 | Design, Pattern',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            ' consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    },
    {
        title: 'Creating pixel perfect icons in Figma',
        subTitle: '12 Feb 2020 | Figma, Icon Design',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            'consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    },
];

const works = [
    {
        preview: Rectangle_30,
        title: 'Designing Dashboards',
        label1: '2020',
        label2: 'Dashboard',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            ' consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        preview: Rectangle_32,
        title: 'Vibrant Portraits of 2020',
        label1: '2020',
        label2: 'Illustration',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            'consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        preview: Rectangle_34,
        title: '36 Days of Malayalam type',
        label1: '2020',
        label2: 'Typography',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            'consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    }
];

export default function Home() {
    return (
        <div>
            <Banner
                user = {profile}
                title = 'Hi, I am John, Creative Technologist'
                description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            />

            <Posts
                menuTitle = 'Recent posts'
                menuLink = 'View all'>
                {posts.map(post => (
                    <Post
                        key = {post.title}
                        title = {post.title}
                        subTitle = {post.subTitle}
                        description = {post.description}

                    />
                ))}
            </Posts>

            <Works
                title = 'Featured works'>
                {works.map(work => (
                    <Work
                        key = {work.title}
                        preview = {work.preview}
                        title = {work.title}
                        label1 = {work.label1}
                        label2 = {work.label2}
                        description = {work.description}
                    />
                ))}
            </Works>

        </div>
    );
}
