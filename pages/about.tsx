import Layout from '../components/Layout'

function about() {
    return (
        <Layout>
        <div className="min-h-screen bg-nord0">
        <video autoPlay loop muted playsInline className="absolute w-full z-1 bg-nord0 brightness-80 blur-md hover:blur-none">
            <source src="/harrier.mov" type="video/mp4" />
        </video>
        <h1 className="relative z-10">Marine Veteran</h1>
        </div>
        <div className="z-1 brightness-50 blur-md bg-nord0">
        <img src="/family.jpeg" alt="My Family"/>
        </div>
        </Layout>
   )
}
export default about;
