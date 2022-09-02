import {Banner} from "../../components/Banner";
import {Post} from "../../components/Post/Post";
import {Posts} from "../../components/Posts";
import {Works} from "../../components/Works";
import {Work} from "../../components/Work";

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
        preview: 'https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1662336000&Signature=KZ3b7Q0qpr84uu-SkeILWsq7Bi9FYHi3v3ImO-C7KtQGCtF1~uUKGwCzuuXp2pr2PNDN1y2dGbcaEEGgjthbG~LftGCACWuvY3DRo0UWLhtEYNIKIrdvNehzpMsIGUnbGuokY9lAUd~0MTNDET7yJvi8F~a7-DnQ-IgobNwrgadyiseqRMxZ74EVK2EGpUXuVW5-Vpcm2Xq2DvbXacNBB-~ta1juZFkBtd4BKDs0VYM6FjfmWYH076GCLcQN74tyjXlba7L5vChSAQ14J7oG~BKUATCqk8vvbAbRCmGkcp1c7glaDWnCv3FRmQiVjUghBVz6428YP5yLQjQOMDRUUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Designing Dashboards',
        label1: '2020',
        label2: 'Dashboard',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            ' consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1662940800&Signature=a0ELggNohD-r0okJ4I-JTqFtQ-nuXw~mlh13olD-kgpdn3uIIU6YzB650NuWiPwg5A0dq2TsiIKzknmzUoA7eUW4BaiuRRk2VBRkIrHqOpfBEs3LrfTIZTapma~3N55nryPWsz~VJTJ-h6hS5ARwXhcP6cjADHZIU7yy-MeXIagaG1E6FHMvDKrphhIv0G2L6sqG99wJ5gkTw1THigL5XgKKW6tMfkMuuFCUuCSijeb51HI0h9~yH7YiwQdZ1lHiMHbTW0TcgEoFAXuIM4YOG-VTr-eIKXe453HT-VwmUN~m4SuuyckWoelua3g7XYbkCMyQ-vWiN3UjNdaIjEc~7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Vibrant Portraits of 2020',
        label1: '2020',
        label2: 'Illustration',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            'consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1662940800&Signature=HqNwSmy5LpoPvOXn-AEQg3uh7LMo28hNyAmuHinbPqXlt0vx8dhZIko8zm6J3-olGvB44bR5pKuwLdm~SLrdFwaq7rOs9Dg5PsCJ6OWuwcXbb3crZJ-4Ck0mJq5XoFD-QDLny6h2J0kRAJFFmf-ZeWQFZ32wNmXP2PeS-34art2p7b2A8S3j949puMTiSs2D86~Mmd5IIqzUWlfe1~3pCj4GhJWdC4BTz0xVkDYGieemt9Hbm291cKcxE9WA3OQqt9Q0L~NIcKoRpZ2evcGzBsn1RZLnNmLOg77i2Yu8u2vfzbsCM1SQvENnAppc0QssSTa6sZmxQfMnm2~Up-NX~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
