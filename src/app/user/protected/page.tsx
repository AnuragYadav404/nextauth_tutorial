import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Protected(req, res) {
    const session = await getServerSession (authOptions)
    if (session) {
        return (
            <div>
                This is protected content. You can access this content because you are signed in.
                {JSON.stringify(session)}
            </div>
        )
    } else {
        return (
            <div>
                You must be signed in to view the protected content on this page.
            </div>
        )
    }
}