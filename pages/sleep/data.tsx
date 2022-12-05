import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { Doughnut} from "react-chartjs-2";
import { Chart, ArcElement} from "chart.js";
Chart.register(ArcElement);


type Data = {
    totalResponses: number;
    totalAdultResponses: number;
    yesResponses: number;
    noResponses: number;
    naResponses: number;
    ho: string;
    ha: string;
    pHat: number;
    stdError: number;
    zScore: number;
    pvalue: number;
    conclusion: string;
    confidenceInterval: string;
    confidenceIntervalString: string;
}

export const getServerSideProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_SLEEPSTATS_URL + "/api/v1/dataInterpretation");
    const data = await res.json();
    return {
        props: {data: data }
    }
}

function Results({data}: {data: Data}) {

    const chartData = {
        labels: ["Yes", "No"],
        datasets: [
            {
                label: "Responses",
                data: [data.yesResponses, data.noResponses],
                backgroundColor: [
                    "#88c0d0",
                    "#5e81ac",
                ],

            }
        ]
    }

    const chartOptions = {
        responsive: true,
        title: {
            display: true,
            text: "Yes/No Responses",
        }
    }

    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className="p-10 text-3xl">Statistics Final Project</h1>
                    <span>Do you sleep for less than 7 hours per night?</span>
                    <span className="my-4">According to the CDC, 34.8% of U.S. adults sleep less than 7 hours per night.</span>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Introduction</h1>
                        <h3 className="text-xl">Why did you choose this project?</h3>
                        <p className="text-nord14 py-2">I read the book Why We Sleep by Matthew Walker and I was amazed by the importance of sleep and how it effects our lives.</p>
                        <h3 className="text-xl">What is your research question?</h3>
                        <p className="text-nord14 py-2">Do you sleep for less than 7 hours per night? (On average)</p>
                        <h3 className="text-xl">What does the data represent?</h3>
                        <p className="text-nord14 py-2">The data represents the portion of U.S. adults who sleep less than 7 hours per night, which has been shown to be detrimental to physical and mental health.</p>
                        <h3 className="text-xl">What is your alpha and why?</h3>
                        <p className="text-nord14 py-2">My alpha is 0.05. This is the standard alpha value used in hypothesis testing.</p>
                    </div>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Sampling Procedure</h1>
                        <h3 className="text-xl">Describe your sampling method.</h3>
                        <p className="text-nord14 py-2">I created a form on my <Link href="/sleep"><span className="text-nord5">website</span></Link> that I could easily share with friends, family, and strangers. I then wrote a backend service that would take the input from my website&apos;s form and store it into a database. I programmed the backend service to calculate all of the data and display it on my website. I hosted the backend service and database on a Raspberry Pi server running at my home.</p>
                        <p className="text-nord14 py-2">You can see the code for the backend service <Link href="https://github.com/anazworth/SleepStats"><span className="text-nord5">here.</span></Link></p>
                        <h3 className="text-xl">Who is the population?</h3>
                        <p className="text-nord14 py-2">The population is all U.S. adults.</p>
                        <h3 className="text-xl">Who is the sample?</h3>
                        <p className="text-nord14 py-2">The sample is 60 randomly selected people. (The website will automatically adjust calculations as more people contribute data, just in case anyone replies late)</p>
                        <h3 className="text-xl">What did you do to avoid bias?</h3>
                        <p className="text-nord14 py-2">To avoid bias, I randomly asked everyone I encountered, both in person and online, over the span of about a week. I spammed the link to the form everywhere I could. Because the parameter is for *adults* in the U.S. I made sure to not count any responses where the age reported was less than 18. I also made sure to not ask anyone who resided outside of the U.S.</p>
                    </div>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Data</h1>
                        <h3 className="text-xl">Yes Responses - {data.yesResponses}</h3>
                        <h3 className="text-xl">No Responses - {data.noResponses}</h3>
                        <h3 className="text-xl">Total Responses - {data.totalAdultResponses}</h3>

                        <Doughnut data={chartData} options={chartOptions} className="my-2 mx-auto"/>
                        <p className="text-nord14">The majority of responses indicated NO ({data.noResponses}/{data.totalResponses}), with YES responses in the minority ({data.yesResponses}/{data.totalResponses}). </p>
                    </div>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Hypothesis Testing</h1>
                        <h3 className="text-xl">Null Hypothesis</h3>
                        <p className="text-nord14 py-2">Ho: p = 0.348</p>
                        <p className="text-nord14 pb-2">The null hypothesis is that the proportion of U.S. adults who sleep less than 7 hours per night is equal to 34.8%.</p>
                        <h3 className="text-xl">Alternative Hypothesis</h3>
                        <p className="text-nord14 py-2">Ha: p &lt; 0.348</p>
                        <p className="text-nord14 pb-2">The alternative hypothesis is that the proportion of U.S. adults who sleep less than 7 hours per night is less than 34.8%.</p>

                        <h3 className="text-xl">Checking Conditions</h3>
                        <p className="text-nord15 py-2">Random and Independent</p>
                        <p className="text-nord14 pb-2">The sample is random and independent because I randomly selected people from the population of U.S. adults.</p>
                        <p className="text-nord15 py-2">Large Sample</p>
                        <p className="text-nord14 pb-2">All U.S. adults &gt; 10({data.totalResponses})</p>
                        <p className="text-nord15 py-2">Big Population</p>
                        <p className="text-nord14 pb-2">{data.totalAdultResponses} * 0.348 {">"}= 10</p>
                        <p className="text-nord14 py-2">{data.totalAdultResponses} * (1 - 0.348) {">"}= 10</p>
                    </div>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Calculations</h1>
                        <h3 className="text-xl">p = 0.348</h3>
                        <h3 className="text-xl">p-hat = {data.pHat}</h3>
                        <h3 className="text-xl">n = {data.totalAdultResponses}</h3>
                        <h3 className="text-xl">SE = {data.stdError}</h3>
                        <h3 className="text-xl">z = {data.zScore}</h3>
                        <h3 className="text-xl">p-value = {data.pvalue}</h3>
                    </div>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Conclusion</h1>
                        <h3 className="text-xl text-nord14">{data.conclusion}</h3>
                    </div>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Confidence Interval</h1>
                        <p className="text-nord14 text-xl py-2">{data.confidenceIntervalString}</p>
                    </div>

                    <div className="my-4 text-start">
                        <h1 className="p-10 text-2xl">Reflection</h1>
                        <p className="text-nord14 py-2">I was initially shocked when I saw that 34.8% of U.S. adults sleep less than 7 hours per night. It seemed wild to me to think that over one-third of U.S. adults aren&apos;t getting anywhere near the recommended amount of sleep. The results of my project confirmed the CDC statistic. I really enjoyed programming everything for this project and being able to see the results change live as responses started to come in. Overall, I think the question and project were really interesting and I was able to learn a lot by combining programming and statistics for my project.</p>
                    </div>
                </main>
            </div>
        </Layout>
    )}

export default Results;