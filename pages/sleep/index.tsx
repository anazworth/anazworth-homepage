import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";
import React, {useState} from "react";
import Link from "next/link";


type Response = {
    age: number;
    response: boolean;
}

function SleepIndex() {
    const [form, setForm] = useState(true);
    const toggleForm = () => setForm(!form);

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
    }


    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    {!form && <div className="flex flex-col justify-center space-y-8">
                        <div className="text-2xl text-nord14 animate-bounce text-center">Thanks for your contribution!</div>
                        <Link href="/sleep/results" className="justify-center text-center mx-auto">
                        <button className="bg-nord14 text-black rounded-md p-2" >See the results</button>
                        </Link>
                    </div>
                    }
                    {form &&
                        <><h1 className="text-2xl underline mb-4">Contribute your data</h1>
                            <form onSubmit={Submit}  id="response"
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
                                <button type="submit"
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