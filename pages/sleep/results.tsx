import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

type Summary = {
    total: number;
    totalAdult: number;
    yes: number;
    no: number;
    na: number;
    percentYes: number;
    percentNo: number;
}

export const getStaticProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_SLEEPSTATS_URL + "/api/v1/summary");
    const data = await res.json();
    return {
        props: { summary: data }
    }
}

function Results({summary}: {summary: Summary}) {
    return (
    <Layout>
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className="p-10 text-3xl">Sleep Statistics Project Summary</h1>
                    <h2>According to the CDC, 34.8% of U.S. adults sleep less than 7 hours per night.</h2>
                    <ul className="p-10">
                        <li>Total Responses: <span className="text-nord14">{summary.total}</span></li>
                        <li>Total Adult Responses: <span className="text-nord14">{summary.totalAdult}</span></li>
                        <li>Total Yes Responses: <span className="text-nord14">{summary.yes}</span></li>
                        <li>Total No Responses: <span className="text-nord14">{summary.no}</span></li>
                        <li>Percentage Yes: <span className="text-nord14">{summary.percentYes}%</span></li>
                        <li>Percentage No: <span className="text-nord14">{summary.percentNo}%</span></li>
                    </ul>
            </main>
        </div>
    </Layout>
 )}

export default Results;