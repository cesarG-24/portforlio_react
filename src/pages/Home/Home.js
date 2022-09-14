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
        preview: 'https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1664150400&Signature=hQZ6PwBX-arrUH8zSbm0waRNtRZ4jab-h8phwUT-3MQ1rUSB0Zh80AsRo5Xu3KDOiXDlLqecI1vqXyOSlVnsDyFCMoULt8vQcZKIjzsW5ptJaZ8LybqsmZGCT1CZ5yKs~eq~cmu~NtVCeMo0b4A6gdgjcrct~fHguc0V7larJdjaAEBlOLrCpx0zdetvQB~Dsdb1OBWvHpk1pqfjO8PVfd4v0UAL7TpilZhn5PR627-M7vHI0fb6Phhq~5mY2BEymmdluUq0juolzoPQNQzpu-xYIpJrqFGxrfMB5Pc4-PxkFUnPjHqqlGB2sjiI9A2~PtdgIvpHIqVrDqkUHDIXRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Designing Dashboards',
        label1: '2020',
        label2: 'Dashboard',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            ' consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1664150400&Signature=Fj~yX1bS7WbTDBdueGaY1-8d9Ob-o~iSsdor95WqzrLu13xcU0hxIbVZ3rAc~xZxHYIt7ZQpDp0kT38lCz-HKwz2Yg1gzy9grz4TPfGQthhAvQG-NtsZ2uu7ixwbvauMcXqBuY6wj9JYyiMeIp27ObfHAuCFAiSSYud7qrtF23jgE0GvG91jO6SESbkDfPh-nKpgPjFaedMNYEZ~2DF2taTDP41i1XoyzxdOMhk78ug9p3iU1leS3TMJL4pkYl7kTLcg3vS7ATpfteYGxRU7kS4fVXq2tlHcQLh7LYANlyg3C6osxgvyD0oQn0mJg~kD1IprbVlHDretYKEZEO1wpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        title: 'Vibrant Portraits of 2020',
        label1: '2020',
        label2: 'Illustration',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia' +
            'consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        preview: 'https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1664150400&Signature=SwS~7ZHfKLi2LSJbW1C~JDGseKbABJlnKdorNnVmY1tm-d1BfUa4oYIjfg5OvmpyeSoVwRfXbXVyT5mYy7C2-GavPuN9hRUAnLcMIkzugJyfIVahkbLVZDhR-3fKwe7Nb5rvEAwQTu31AWqSI1bSo9mgkI191UYvipU20aZ~sBnckJBUbd8g6O-tqnLaKgmuR7E0rg3ejZjl83bUK1DYXccxTQ7RPtNpHJCJJn0AjuJId0lU1gAawRrBPcvOzfK~qMCzx2g0Oaj0EneaiOPiYaJ130e~QazK12GeTih6IFMLA6udxx6ZNEqAkLUvt33nMl36715cjVWS04KOAF7Uog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
