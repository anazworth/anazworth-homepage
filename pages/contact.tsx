import Layout from '../components/layout'
import styles from '../styles/Home.module.css'


function contact() {
    return (
        <Layout>
        <div className={styles.container}>
        <main className={styles.main}>
        <div className="flex flex-col space-y-8">
            <h1 className="text-nord4 text-4xl underline">Contact Me</h1>
            <ul className="flex-row justify-center space-y-4">
                <li className="group text-2xl flex flex-row">
                   <a className=""href="mailto:anazworth@protonmail.com">Email</a>
                   <h1 className="opacity-0  group-hover:opacity-100 text-nord12">Available Anytime</h1>
                </li>
                <li className="group text-2xl flex flex-row">
                    <a href="https://www.github.com/anazworth" target="_blank" rel="noopener noreferrer">Github</a>
                    <h1 className="opacity-0  group-hover:opacity-100 text-nord14">Checkout my code</h1>
                </li>
                <li className="group text-2xl flex flex-row">
                    <a href="https://discordapp.com/users/358127969593720842" target="_blank" rel="noopener noreferrer">Discord</a>
                    <h1 className="opacity-0  group-hover:opacity-100 text-nord11">Terminally Online</h1>
                </li>
                <li className="group text-2xl flex flex-row">
                    <a href="https://www.linkedin.com/in/austin-nazworth-06b8a018a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <h1 className="opacity-0  group-hover:opacity-100 text-nord15">Connect with me</h1>
                </li>
                <li className="group text-2xl flex flex-row">
                    <a href="https://www.instagram.com/austinnazworth/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <h1 className="opacity-0  group-hover:opacity-100 text-nord13">Follow me</h1>
                </li>
            </ul>
        </div>
        </main>
        </div>
        </Layout>
   )
}
export default contact;
