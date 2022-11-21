import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";
import React, {useState} from "react";


type Summary = {
    total: number;
    totalAdult: number;
    yes: number;
    no: number;
    na: number;
    percentYes: number;
    percentNo: number;
}

type Response = {
    age: number;
    response: boolean;
}

export const getStaticProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_SLEEPSTATS_URL + "/api/v1/summary");
    const data = await res.json();
    return {
        props: { summary: data }
    }
}

function SleepIndex({summary}: {summary: Summary}) {
    const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const responseData: Response = {
            response: data.get("response") === "true",
            age: parseInt(data.get('age') as string)
        }

        const response = await fetch(process.env.NEXT_PUBLIC_SLEEPSTATS_URL + "/api/v1/response", {
            method: "POST",
            body: JSON.stringify(responseData),
        });
        const json = await response.json();
        toggleForm();
    }

    const [form, setForm] = useState(true);
    const toggleForm = () => setForm(!form);

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

                    {!form && <div className="text-2xl text-nord14 animate-bounce text-center">Thanks for your contribution!</div>}
                    {form &&
                        <><h1 className="text-2xl underline mb-4">Contribute your data</h1>
                            <form onSubmit={Submit} action='/'  id="response"
                                  className="flex flex-col justify-center text-center space-y-4">
                                <label className="">Do you sleep for less than 7 hours per night? (On average)</label>
                                <div className="flex flex-row justify-center space-x-4">
                                    <input required type="radio" id="yes" name="response" value="true"
                                           className="border-1 border-nord14 rounded-md p-2 text-black "/>
                                    <label htmlFor="yes">Yes</label>
                                </div>
                                <div className="flex flex-row justify-center space-x-4">
                                    <input type="radio" id="no" name="response" value="false"
                                           className="border-1 border-nord14 rounded-md p-2 text-black "/>
                                    <label htmlFor="no">No</label>
                                </div>
                                <div className="flex flex-row justify-center space-x-4">
                                    <label className="">Age:</label>
                                    <input required type="number" name="age" id="age"
                                           className="border-1 border-nord14 rounded-md p-2 text-black "/>
                                </div>
                                <button type="submit" value="Submit"
                                        className="bg-nord14 text-black rounded-md p-2 ">Submit
                                </button>
                            </form>
                        </>
                    }
                </main>
            </div>
        </Layout>
    )
}

export default SleepIndex;