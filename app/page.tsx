import Posts from "./compontents/Posts"
import MyProfilePic from './compontents/MyProfilePic'

export const revalidate = 86400

export default function Home() {
    return (
        <div className="ms-auto">
            <MyProfilePic />
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Hello and Welcome 👋&nbsp;
                <span className="whitespace-nowrap">
                    I'm <span className="font-bold">Piotrek</span>.
                </span>
            </p>
            <Posts />
        </div>
    )
}
